import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyleText } from '../../style/global';

import { ContadorDisplay } from '../ContadorDisplay';
import { ContadorBotao } from '../ContadorBotao';

export const ContadorV2 = () => {
  const [num, setNum] = useState(0);

  return (
    <View>
      <Text style={globalStyleText.size25}>
        Contador: 
      </Text>
      <ContadorDisplay num={num} />
      <ContadorBotao  
        inc={() => setNum(num+1)}
        dec={() => setNum(num-1)}
      />
    </View>
  )
}
