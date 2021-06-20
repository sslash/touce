
@available(iOS 10.0, *)
@objc(BSView)
class BSView: UIView {
  @objc var onDismiss: RCTDirectEventBlock?
  var bsViewController = BSViewController()
  var hasEmbedded = false
  weak var children: UIView?
  
  @objc var height: Int = 600  {
    didSet {
      bsViewController.setHeight(height: height)
    }
  }
  
  @objc var theme: String = "Light"  {
    didSet {
      bsViewController.setTheme(theme: theme)
    }
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
  }
  
  required init?(coder aDecoder: NSCoder) { fatalError("nope") }
  
  override func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
    children = subview
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()

    if hasEmbedded == false {
      embed()
    } else {
      bsViewController.view.frame = bounds
    }
    
    if let childView = children {
        bsViewController.embedChildrenInContent(view: childView)
    }
  }

  private func embed() {
    hasEmbedded = true
    
    guard
      let parentVC = getViewController()
      else {
        return
    }
    
    bsViewController.setOnDismiss(cb: {
        if let _onDismiss = self.onDismiss {
          _onDismiss(["success": "true"])
        }
    })

    let vc = bsViewController
  
    
    // append the view controller to the parent
    parentVC.addChild(vc)
    addSubview(vc.view)
    vc.view.frame = bounds
    vc.didMove(toParent: parentVC)
  }
  
  // called from react-native via view-manager
  @objc func dismissModal() {
    bsViewController.dismissModal()
  }
  
  func getViewController () -> UIViewController?
  {
//    let appDelegate = UIApplication.shared.delegate
//    if let presented = appDelegate?.window??.rootViewController
//    {
//      return presented
//    }
//    else
//    {
//      return parentViewController
//    }
    
    return parentViewController
    
  }
}
