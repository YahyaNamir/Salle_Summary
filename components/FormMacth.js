import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FormMatch = () => {
  const [formData, setFormData] = useState({
    selectedAdv: '',
    date: '',
    hour: '',
    homeOrAway: '',
    selectedStade: false,
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, selectedStade: !formData.selectedStade });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Opponent:</Text>
      <Picker
        selectedValue={formData.selectedAdv}
        onValueChange={(value) => handleInputChange('selectedAdv', value)}
        style={styles.picker}
      >
        <Picker.Item label="Opponent 1" value="opponent1" />
        <Picker.Item label="Opponent 2" value="opponent2" />
        <Picker.Item label="Opponent 3" value="opponent3" />
      </Picker>

      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter date (YYYY-MM-DD)"
        value={formData.date}
        onChangeText={(value) => handleInputChange('date', value)}
      />

      <Text style={styles.label}>Hour:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter hour (HH:MM)"
        value={formData.hour}
        onChangeText={(value) => handleInputChange('hour', value)}
      />

      <Text style={styles.label}>Home or Away:</Text>
      <Picker
        selectedValue={formData.homeOrAway}
        onValueChange={(value) => handleInputChange('homeOrAway', value)}
        style={styles.picker}
      >
        <Picker.Item label="Home" value="home" />
        <Picker.Item label="Away" value="away" />
      </Picker>



      <Text style={styles.label}>Select Stade:</Text>
      <Picker
        selectedValue={formData.selectedStade}
        onValueChange={(value) => handleInputChange('selectedStade', value)}
        style={styles.picker}
      >
        <Picker.Item label="Stade 1" value="Stade1" />
        <Picker.Item label="Stade 2" value="Stade2" />
        <Picker.Item label="Stade 3" value="Stade3" />
      </Picker>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});

export default FormMatch;
