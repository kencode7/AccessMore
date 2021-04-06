import React, { useState, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Overlay } from 'react-native-elements';
import CardDetail from './Components/CardDetail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Data from './Components/Data';
import { Transition, Transitioning } from 'react-native-reanimated';

const App = () => {
  const [visible, setVisible] = useState(false);
  const handleOverlay = () => {
    setVisible(!visible);
  };

  const [currentIndex, setCurrentIndex] = useState(null);
  // const ref = useRef();
  // const transition = (
  //   <Transition.Sequence>
  //     <Transition.In type="fade" durationMs={200} />
  //     <Transition.Change />
  //     <Transition.Out type="fade" durationMs={200} />
  //   </Transition.Sequence>
  // );

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Support</Text>
        </View>
        <View style={styles.headerVersionView}>
          <Text style={styles.headerAppVersion}>App version: 2.2.0</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.category1}>
            <Text style={styles.cardTitle}>Support</Text>
            <CardDetail cardText="Access Inflow details" />
            <View style={styles.line} />
            <CardDetail cardText="FAQ" onPress={handleOverlay} />
          </View>
          <View style={styles.category1}>
            <Text style={styles.cardTitle}>Social media</Text>
            <CardDetail cardText="@accessbank_help" />
            <View style={styles.line} />
            <CardDetail cardText="AccessBankPlc" />
            <View style={styles.line} />
            <CardDetail cardText="@access_more" />
          </View>
          <View style={styles.category1}>
            <Text style={styles.cardTitle}>Call us</Text>
            <CardDetail cardText="01-2712005-7" />
            <View style={styles.line} />
            <CardDetail cardText="01-2802500" />
            <View style={styles.line} />
            <CardDetail cardText="0700CALLACCESS" />
          </View>
        </View>
      </ScrollView>
      <View>
        <Overlay
          isVisible={visible}
          overlayStyle={styles.overlay}
          fullScreen={true}>
          <View style={styles.overlayHeader}>
            <TouchableOpacity onPress={handleOverlay}>
              <Icon name="inbox" type="material" color="#0000cd" />
            </TouchableOpacity>
            <Text>FAQ</Text>
            <View />
          </View>
          {/* <CollapsibleList collapsed={expanded} onPress={handleExpand} /> */}
          <ScrollView>
            <View>
              {Data.map(({ question, answers }, index) => {
                return (
                  <View style={styles.faqCard} key={question}>
                    <View style={styles.textContainer}>
                      <View>
                        <Text style={styles.questions}>{question}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.touchIcon}
                        onPress={() => {
                          setCurrentIndex(
                            index === currentIndex ? null : index,
                          );
                        }}>
                        <Icon name="menu" color="#0000cd" />
                      </TouchableOpacity>
                    </View>
                    {index === currentIndex && (
                      <View style={styles.answers}>
                        <Text style={styles.answersText}>{answers}</Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </Overlay>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add8e6',
    paddingTop: 10,
  },
  header: {
    paddingTop: 30,
    backgroundColor: '#0000cd',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Avenir.Next',
  },
  headerAppVersion: {
    color: '#fff',
    fontSize: 10,
    marginRight: 5,
    fontFamily: 'Avenir.Next',
  },
  headerVersionView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'grey',
    marginVertical: 5,
  },
  category1: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },
  cardTitle: {
    color: 'grey',
    fontSize: 15,
  },
  overlayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  overlay: {
    marginTop: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  faqCard: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  textContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  answers: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  answersText: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Avenir-Next',
  },
  questions: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Avenir-Next',
    width: 250,
  },
  touchIcon: {
    backgroundColor: '#87cefa',
    borderRadius: 50,
    padding: 10,
  },
});

export default App;
