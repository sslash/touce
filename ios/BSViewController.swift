import UIKit


@available(iOS 10.0, *)
class BSViewController: UIViewController {

    enum CardState {
        case expanded
        case collapsed
    }
    var theme = "Light"
    
    var onDismissCb: () -> Void = {}
    var cardViewController:CardViewController!
    var visualEffectView:UIVisualEffectView!
    
    var cardHeight:CGFloat = 600
    let cardHandleAreaHeight:CGFloat = 65
    
    var cardVisible = false
    var nextState:CardState {
        return cardVisible ? .collapsed : .expanded
    }
    
    var runningAnimations = [UIViewPropertyAnimator]()
    var animationProgressWhenInterrupted:CGFloat = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupCard()
        addCornerRadius()
    }
    
    func setupCard() {
        visualEffectView = UIVisualEffectView()
        visualEffectView.frame = self.view.frame
        self.view.addSubview(visualEffectView)
        
        cardViewController = CardViewController(nibName:"CardViewController", bundle:nil)
      self.addChild(cardViewController)
        self.view.addSubview(cardViewController.view)
        cardViewController.view.frame = CGRect(x: 0, y: self.view.frame.height, width: self.view.bounds.width, height: cardHeight)
        
        cardViewController.view.clipsToBounds = true
        
        let tapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(BSViewController.handleCardTap(recognzier:)))
        let panGestureRecognizer = UIPanGestureRecognizer(target: self, action: #selector(BSViewController.handleCardPan(recognizer:)))
        
        cardViewController.handleArea.addGestureRecognizer(tapGestureRecognizer)
        cardViewController.handleArea.addGestureRecognizer(panGestureRecognizer)
        self.applyTheme()
    }
  
  func addCornerRadius () {
    let path = UIBezierPath(roundedRect:self.cardViewController.view.bounds,
                            byRoundingCorners:[.topRight, .topLeft],
                            cornerRadii: CGSize(width: 22, height:  22))

    let maskLayer = CAShapeLayer()
    maskLayer.path = path.cgPath
    self.cardViewController.view.layer.mask = maskLayer
  }
  
    // embed react children inside inner modal
    func embedChildrenInContent (view: UIView) {
      cardViewController.yourContent.addSubview(view)
      self.animateHeight(0.7, true)
    }
  
  func setHeight (height: Int) {
    cardHeight = CGFloat(height)
  }
  
  func setTheme (theme: String) {
    self.theme = theme
  }
  
  func applyTheme () {
    if (theme == "Dark") {
      paintViews(UIColor.black, UIColor.gray)
    
    // Light
    } else {
      paintViews(UIColor(red: 255, green: 255, blue: 255, alpha: 1.0), UIColor.darkText)
    }
  }
  
  func paintViews (_ viewColor: UIColor, _ handleColor: UIColor) {
    cardViewController.yourContent.backgroundColor = viewColor
    cardViewController.handleArea.backgroundColor = viewColor
    cardViewController.handleLine.backgroundColor = handleColor
  }
  
  func dismissModal () {
    self.animateHeight(0.6, false)
  }
  
  func setOnDismiss (cb: @escaping () -> Void) {
    self.onDismissCb = cb
  }

    @objc
    func handleCardTap(recognzier:UITapGestureRecognizer) {
        switch recognzier.state {
        case .ended:
            animateTransitionIfNeeded(state: nextState, duration: 0.7)
        default:
            break
        }
    }
    
    @objc
    func handleCardPan (recognizer:UIPanGestureRecognizer) {
        switch recognizer.state {
        case .began:
            startInteractiveTransition(state: nextState, duration: 0.7)
        case .changed:
            let translation = recognizer.translation(in: self.cardViewController.handleArea)
            var fractionComplete = translation.y / cardHeight
            fractionComplete = cardVisible ? fractionComplete : -fractionComplete
            updateInteractiveTransition(fractionCompleted: fractionComplete)
        case .ended:
            continueInteractiveTransition()
        default:
            break
        }
        
    }
    
    func animateTransitionIfNeeded (state:CardState, duration:TimeInterval) {
      let expand = state == .expanded
      self.animateHeight(duration, expand)
    }
  
  func animateHeight (_ duration: TimeInterval, _ willExpand: Bool) {
    if runningAnimations.isEmpty {
        
      // make nice background blur
      let blurAnimator = UIViewPropertyAnimator(duration: duration, dampingRatio: 1) {
        if willExpand {
          if #available(iOS 13.0, *) {
            // TODO experiment more with this to remove the grey bg when dismissing
//            self.visualEffectView.effect = UIBlurEffect(style: .systemChromeMaterialDark)
            self.visualEffectView.effect = UIBlurEffect(style: .dark)
          } else {
            self.visualEffectView.effect = UIBlurEffect(style: .dark)
          }
        } else {
            self.visualEffectView.effect = nil
        }
      }
      
      blurAnimator.startAnimation()
      runningAnimations.append(blurAnimator)
      
      // height animation
      let frameAnimator = UIViewPropertyAnimator(duration: duration, dampingRatio: 1) {
        if willExpand {
          self.cardViewController.view.frame.origin.y = self.view.frame.height - self.cardHeight
        } else {
          self.cardViewController.view.frame.origin.y = self.view.frame.height
        }
      }
      
      frameAnimator.addCompletion { _ in
          self.cardVisible = !self.cardVisible
          self.runningAnimations.removeAll()
          //
          // swiped modal down, let's dismiss
          //
          if (willExpand == false) {
            self.onDismissCb()
          }
      }
      
      frameAnimator.startAnimation()
      runningAnimations.append(frameAnimator)
    }
  }
    
    func startInteractiveTransition(state:CardState, duration:TimeInterval) {
        if runningAnimations.isEmpty {
            animateTransitionIfNeeded(state: state, duration: duration)
        }
        for animator in runningAnimations {
            animator.pauseAnimation()
            animationProgressWhenInterrupted = animator.fractionComplete
        }
    }
    
    func updateInteractiveTransition(fractionCompleted:CGFloat) {
        for animator in runningAnimations {
            animator.fractionComplete = fractionCompleted + animationProgressWhenInterrupted
        }
    }
    
    func continueInteractiveTransition (){
        for animator in runningAnimations {
            animator.continueAnimation(withTimingParameters: nil, durationFactor: 0)
        }
    }
    
}
