import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [isValid, setIsValid] = useState(false);

const handleAmountChange = (text) => {
    // Remove any non-digit characters from the input
    const cleanedText = text.replace(/[^0-9.]/g, '');
    setAmount(cleanedText);
    setIsValid(/^\d+$/.test(cleanedText));
  };

  const handlePayNow = () => {
    if (isValid) {
      // Perform payment logic here
      console.log(`Payment of $${amount} processed successfully.`);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.textHeading}>Paying your friend</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={`$${amount}`} // Add the $ symbol to the value
        onChangeText={handleAmountChange}
        keyboardType="numeric"
      />
      <Button
        title="Pay Now"
        onPress={handlePayNow}
        disabled={!isValid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'blue'
  },
  textHeading:{
    color:'gray',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 0,
    borderRadius: 0,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default Payment;