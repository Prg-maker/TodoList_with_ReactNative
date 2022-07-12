import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({

  containerTasks: {
    height: '52%',
    width: '93%',
    position: 'absolute',
    bottom: 0,
    marginLeft:14,
    marginRight:14,


    backgroundColor: theme.colors.color_text_white,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,

  },
  headerTasks: {
    paddingLeft: 27,
    paddingTop: 27,
    paddingRight: 18,
    flexDirection: "row",

    justifyContent: "space-between",
  },
  text: {
    fontFamily: theme.fonts.fontRegular,
    color: theme.colors.color_text_black,
  },
});
