import { Text, View, Image, TextInput } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";

export class HomeHeader extends Component {
  render() {
    return (
      <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image source={assets.logo} />
        </View>
      </View>
    );
  }
}

export default HomeHeader;
