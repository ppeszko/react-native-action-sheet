declare module "react-native-action-sheet" {
  import { ActionSheetIOSOptions } from "react-native";

  interface ActionSheet {
    showActionSheetWithOptions: (
      options: ActionSheetIOSOptions,
      callback: (buttonIndex: number) => void
    ) => void;
  }

  var ActionSheet: ActionSheet;
  export default ActionSheet;
}
