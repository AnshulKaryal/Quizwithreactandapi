import { Link, useNavigate } from "react-router-dom";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = ({ score }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Quiz Score: {score}</Text>
      </View>
    </Page>
  </Document>
);

export default function ScoreCard({ score,setScore }) {
    const navigate = useNavigate();

    const handleRestart = () => {
        setScore(0);
      navigate('/');
    }

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-teal-100 space-y-10">
      <p className="font-yasu font-semibold text-[60px]">You have completed the quiz triva</p>
      <p className="font-yasu font-semibold text-[60px]">Your score is: {score}</p>
      <PDFDownloadLink document={<MyDocument score={score} />} fileName="scorecard.pdf">
        <button className="bg-teal-600 py-2 px-6 rounded-full font-yasu font-medium text-[30px]">Download Score-Card</button>
      </PDFDownloadLink>
      <button onClick={handleRestart} className="bg-teal-600 py-2 px-6 rounded-full font-yasu font-medium text-[30px]">Restart</button>
    </div>
  );
}
