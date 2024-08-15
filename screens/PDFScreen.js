import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const playersList = [
  {
    id: '1',
    name: 'Abdelkrim ANBIA',
    position: 'GK',
    timeIn: '22:18',
    timeOut: '12:18',
  },
  {
    id: '10',
    name: 'Soufiane EL MESRAR',
    position: 'MO',
    timeIn: '22:18',
    timeOut: '12:18',
  },
  {
    id: '3',
    name: 'Anas EL AYAN',
    position: 'AT',
    timeIn: '22:18',
    timeOut: '12:18',
  },
  {
    id: '8',
    name: 'Soufian CHAARAOUI',
    position: 'AT',
    timeIn: '22:18',
    timeOut: '12:18',
  },
];

const playerItemHtml = player => `
  <div style="display: flex; align-items: center; padding: 10px; border-bottom: 1px solid #ccc;">
    <div style="flex: 1; margin-left: 10px; display: flex; align-items: center;">
      <div style="font-family: 'Poppins-ExtraBold'; font-size: 14px; color: #333; width: 25px;">
        ${player.id}
      </div>
      <div style="font-family: 'Poppins-Regular'; font-size: 15px; color: #000;">
        ${player.name}
      </div>
      <div style="display: flex; align-items: center;">
        <div style="background-color: #c1c416b4; color: #000; font-family: 'Poppins-Regular'; font-size: 12px; padding: 5px; border-radius: 5px; margin-left: 4px;">
          ${player.position}
        </div>
        <div style="background-color: #e0ffe0; color: #00a000; font-family: 'Poppins-Regular'; font-size: 12px; padding: 5px; border-radius: 5px; margin-left: 4px;">
          🟢 ${player.timeIn}
        </div>
        <div style="background-color: #ffe0e0; color: #a00000; font-family: 'Poppins-Regular'; font-size: 12px; padding: 5px; border-radius: 5px; margin-left: 4px;">
          🔴 ${player.timeOut}
        </div>
      </div>
    </div>
  </div>
`;

const playersHtml = playersList.map(player => playerItemHtml(player)).join('');

const positions = {
  GK: { top: '10%', left: '10%' },
  MO: { top: '30%', left: '40%' },
  // AT: { top: '50%', left: '30%' },
};

const lineupHtml = `
  <div style="position: relative; width: 100%; height: 100%; background: url('https://example.com/path/to/stade.png') no-repeat center center; background-size: cover;">
    ${playersList.map(player => `
      <div style="position: absolute; ${positions[player.position].top}; ${positions[player.position].left}; width: 72px; height: 72px; border-radius: 50%; background-color: #e3eff4cd; border: 1px solid #00000083; display: flex; justify-content: center; align-items: center; padding: 5px;">
        <div style="font-size: 16px; color: #000; font-family: 'Poppins-ExtraBold'; position: absolute; top: -17px;">
          ${player.position}
        </div>
        <div style="font-size: 11px; color: #000; font-family: 'Poppins-Bold';">
          ${player.name}
        </div>
      </div>
    `).join('')}
  </div>
`;

const createPDF = async () => {
  let options = {
    html: `
      <html>
        <head>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              font-size: 14pt;
              line-height: 1.6;
              display: flex;
              flex-direction: column;
              height: 100%;
            }
            .page {
              display: flex;
              flex-wrap: wrap;
              height: 100%;
            }
            .top-left, .top-right {
              width: 50%;
              padding: 10px;
              box-sizing: border-box;
            }
            .top-left {
              border-right: 1px solid #ccc;
            }
            .top-right {
              text-align: right;
            }
            .player-list {
              padding: 10px;
            }
            .lineup {
              position: relative;
              height: 100%;
              background: url('https://example.com/path/to/stade.png') no-repeat center center;
              background-size: cover;
              padding: 10px;
            }
          </style>
        </head>
        <body>
          <div class="page">
            <div class="top-left">
              <h1 style="text-align: center; color: #ff0000;">Player List</h1>
              <div class="player-list">
                ${playersHtml}
              </div>
            </div>
            <div class="top-right">
              <h1 style="text-align: center; color: #ff0000;">Lineup</h1>
              <div class="lineup">
                ${lineupHtml}
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    fileName: 'player_report',
    directory: 'Documents',
  };

  try {
    let file = await RNHTMLtoPDF.convert(options);
    Alert.alert('PDF Created', `File saved at ${file.filePath}`);
  } catch (error) {
    Alert.alert('Error', `Failed to create PDF: ${error.message}`);
  }
};

const PDFScreen = () => (
  <View style={styles.container}>
    <Button title="Create PDF" onPress={createPDF} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PDFScreen;
