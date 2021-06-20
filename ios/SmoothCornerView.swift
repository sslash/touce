//
//  SmoothCornerView.swift
//  liftncast
//
//  Created by michael gunnulfsen on 07/04/2021.
//

@available(iOS 10.0, *)
@objc(SmoothCornerView)
class SmoothCornerView: UIView {
  weak var children: UIView?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
  }
  
  required init?(coder aDecoder: NSCoder) { fatalError("nope") }
  
  override func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
    children = subview
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()

  
    self.frame = bounds
    if #available(iOS 13.0, *) {
      self.layer.cornerCurve = .continuous
    } else {
      let maskLayer = CAShapeLayer();
      maskLayer.frame = self.bounds;
      let newPath = UIBezierPath(roundedRect: self.bounds, cornerRadius: self.layer.cornerRadius)
      maskLayer.path = newPath.cgPath
      self.layer.mask = maskLayer
    }
    
    if let _children = children {
      self.addSubview(_children)
    }
  }
}

