//
//  SmoothCornerViewManager.swift
//  liftncast
//
//  Created by michael gunnulfsen on 07/04/2021.
//
import Foundation

@objc (SmoothCornerViewManager)
class SmoothCornerViewManager: RCTViewManager {
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func view() -> UIView! {
    if #available(iOS 10.0, *) {
      return SmoothCornerView()
    } else {
      // Fallback on earlier versions
      return UIView()
    }
  }
  
  // manager function to be called from react-native
  // @see https://medium.com/@jjdanek/react-native-calling-class-methods-on-native-swift-views-521faf44f3dc
  @objc func dismissModal(_ node: NSNumber) {
     DispatchQueue.main.async {
      if #available(iOS 10.0, *) {
        let comp = self.bridge.uiManager.view(forReactTag: node) as! SmoothCornerView
//        comp.dismissModal()
      }
     }
   }
  
}
