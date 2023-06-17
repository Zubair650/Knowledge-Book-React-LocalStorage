
import { useEffect, useState } from 'react';
import './App.css';
import Blocks from './components/blocks/blocks';
import Header from './components/header/header';
import { addNameToDb, addToDb, getBookMarked } from './utilities/managedb';
import Bookmarked from './components/bookmarked/bookmarked';
import { addToTimeDb, getTime } from './utilities/managetimedb';
import Markedtime from './components/markedtime/markedtime';
import QuesAns from './components/ques_ans/ques_ans';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [blocks, setState] = useState([]);
  const [bookmarks, setBookmark] = useState([]);
  const [times, setTime] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setState(data));
  }, []);

  useEffect(() => {
    const storedBookmark = getBookMarked();
    const savedBookmark = [];
    for (const id in storedBookmark) {
      const addedProduct = blocks.find(block => block.id === id);

      if (addedProduct) {
        const quantity = storedBookmark[id];
        addedProduct.quantity = quantity;
        savedBookmark.push(addedProduct);
      }
    }
    setBookmark(savedBookmark);

    const storedTime = getTime();
    const savedTime = [];
    //  console.log(storedCart)
    for (const id2 in storedTime) {
      const addedTimes = blocks.find(block2 => block2.id === id2);

      if (addedTimes) {
        const q = storedTime[id2];
        addedTimes.q = q;
        // console.log(addedTimes);
        savedTime.push(addedTimes);
      }
    }
    setTime(savedTime);

  }, [blocks])

  const btnBookmark = (block) => {
    // const newBookmark = [...bookmarks, block];
    let newBookmark = [];
    const exists = bookmarks.find(pd => pd.id === block.id);
    if (!exists) {
      block.quantity = 1;
      newBookmark = [...bookmarks, block]
    }
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = bookmarks.filter(pd => pd.id !== block.id);
      newBookmark = [...remaining, exists];
      toast("You have already bookmarked it!");
    }

    setBookmark(newBookmark);
    addToDb(block.id);
    addNameToDb(block.name);
    
  }

  const btnTime = (time) => {
    // const newTimes = [...times, time];

    let newTime = [];
    const exists = times.find(pd => pd.id === time.id);
    if (!exists) {
      time.q = 1;
      newTime = [...times, time]
    }
    else {
      exists.q = exists.q + 1;
      const remaining = times.filter(pd => pd.id !== time.id);
      newTime = [...remaining, exists];
    }

    setTime(newTime);
    addToTimeDb(time.id);
  }


  return (
    <div>
      <div className='App'>
        <div >
          <Header></Header>
          {
            blocks.map(block =>
              <Blocks
                key={block.id}
                block={block}
                btnBookmark={btnBookmark}
                btnTime={btnTime}
              >
              </Blocks>)
          }

        </div>
        <Markedtime times={times}></Markedtime>
        <Bookmarked bookmarks={bookmarks}></Bookmarked>
      </div>
      <QuesAns></QuesAns>
    </div>
  );
}

export default App;
