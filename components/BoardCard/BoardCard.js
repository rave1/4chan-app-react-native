import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";


// export default BoardCard = () => {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState();

//     const getBoards = async () => {
//         try{
//             const response = await fetch(BOARD_URL):
//             const json = await response.json()
//             setData(json)
//         }
//     }
// }
const BoardCard = (props) => {
    return (
        <View> 
            <Text>
                {props.board}
            </Text>
            <Text>
                {props.description}
            </Text>
        </View>
    );
}
export default BoardCard;
