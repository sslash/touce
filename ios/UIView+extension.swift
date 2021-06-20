//
//  UIView+extension.swift
//  liftncast
//
//  Created by michael gunnulfsen on 04/06/2021.
//

import Foundation


extension UIView {
  var parentViewController: UIViewController? {
    var parentResponder: UIResponder? = self
    while parentResponder != nil {
      parentResponder = parentResponder!.next
      if let viewController = parentResponder as? UIViewController {
        return viewController
      }
    }
    return nil
  }
}
