#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(BSViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(height, int)
RCT_EXPORT_VIEW_PROPERTY(theme, NSString)
RCT_EXPORT_VIEW_PROPERTY(onDismiss, RCTDirectEventBlock)
RCT_EXTERN_METHOD(dismissModal:(nonnull NSNumber *)node)

@end
