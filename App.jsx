import { View, Text,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useState} from 'react'
import {choices} from './src/data/mockData'
import {COLORS} from './src/util/constant'

const App = () => {
const [userChoice, setUserChoice] = useState(null);
const [computerChoice, setComputerChoice] = useState(null);
const [result, setResult] = useState(null);


const handleUserChoice = (userChoice)=>{
  setUserChoice(userChoice);
}


const randomComputerChoice = (userChoice) => {

  const randomIndex = Math.floor(Math.random() * choices.length);

  const computerChoice = choices[randomIndex];

  setComputerChoice(computerChoice);
  determineWinner(userChoice, computerChoice);
}

const determineWinner = (user, computer) => {
  if (user.name === computer.name) {
    setResult('Draw');
  } else if (
    user.name === 'Rock' && computer.name === 'Scissors' ||
    user.name === 'Paper' && computer.name === 'Rock' ||
    user.name === 'Scissors' && computer.name === 'Paper'
  ) {
    setResult('User Won');
  } else {
    setResult('Computer Won');
  }
}
}


  return (
   <SafeAreaView style={styles.container}>
      <View style={styles.container} >
      <Text style={styles.title}>ROCK PAPER SCISSORS</Text>
      <Text style={styles.choiceText}>User's Choice:</Text>

<View style={styles.choices}>
{choices.map((choice) => (
  <TouchableOpacity key={choice?.id}style={choice?.name ===
    userChoice?.name ? [styles.button,styles.activeButton] : styles.
    button}onPress={() => handleUserChoice(choice)} >
      <Image source={choice.image} style={styles.image} />

  </TouchableOpacity>
))}
</View>
<Text style={styles.resultText}>{result}</Text>

 {computerChoice && (
  <>
    <Text style={styles.choiceText}>Computer's Choice:</Text>
    <View style={styles.button}>
      <Image source={computerChoice?.image} style={styles.image} />
    </View>
  </>
)}

  </View> 

     </SafeAreaView>
  )


export default App

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom:20
  },
  choiceText:{
    marginVertical:20,
    fontSize: 20,
    color: COLORS.white
  },
   choices:{
  flexDirection: 'row',
  justifyContent: 'space-around',
  gap:10
},

image:{
  width: 90,
  height:90,

},

button:{
  padding:10,
  borderRadius:70,
  backgroundColor:COLORS.white
},

activeButton:{
  borderWidth: 4,
  borderColor: 'red'
}
})