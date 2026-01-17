import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../theme/colors";

interface Props {
  value: string;
  onChange: (text: string) => void;
  onFilterPress?: () => void;
  onNotificationPress?: () => void;
}

const HomeHeader: React.FC<Props> = ({
  value,
  onChange,
  onFilterPress,
  onNotificationPress,
}) => {
  return (
    <View>
      <View style={styles.topRow}>
        <View style={styles.profileRow}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/100",
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.hello}>Hello</Text>
            <Text style={styles.name}>Emily Ava</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.notification}
          onPress={onNotificationPress}
        >
          <Ionicons name="notifications-outline" size={22} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color={COLORS.muted} />
          <TextInput
            placeholder="Search recipes"
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholderTextColor={COLORS.muted}
          />
        </View>

        <TouchableOpacity style={styles.filterBtn} onPress={onFilterPress}>
          <Ionicons name="options-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  hello: {
    color: COLORS.muted,
    fontSize: 13,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  notification: {
    backgroundColor: COLORS.card,
    padding: 10,
    borderRadius: 14,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBox: {
    flex: 1,
    height: 52,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
  },
  filterBtn: {
    marginLeft: 12,
    backgroundColor: COLORS.primary,
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },
});
