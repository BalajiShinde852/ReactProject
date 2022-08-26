import * as React from "react";
import { Button, View, Alert, Text } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const video = React.useRef(null);
const [status, setStatus] = useState({});

const VideoDisplay = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 160,
        }}
      >
        <Video
          ref={video}
          source={require("./assets/sample-mp4-file-small.mp4")}
          style={styles.vid}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={setStatus}
        />
      </View>
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
};
export default VideoDisplay;
