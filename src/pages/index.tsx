import { useState, useEffect } from 'react';
import { Link } from 'umi';
import axios from 'axios';
import styles from './index.less';

export default function IndexPage() {
  const [list, setList] = useState([]);
  console.log('list: ', list);


  useEffect(() => {
    getList();
  }, []);

  function getList() {
    console.log(1111);
    axios.get('/api/businesses/search', {
        params: {
            location: 'Las Vegas'
        },
        headers: {
            Authorization: 'Bearer BBOiWui3RfgRTuWDozeQvfTlcuf39iTxdpTTzSyBm-gJ8jdV7Pscl4ngGAZe8lbaQh9zSYU1MwAy38IFuMuJTIv5dc5L4fpBOXIbC6uPfIa7Jxtzoo5z7gGEdNoFY3Yx'
        }
    },).then(res => {
        console.log('res: ', res);
        setList(res.data?.businesses)
    });
  }



  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/detail">Go to detail page</Link>
      <div onClick={getList}> 2323</div>
    </div>
  );
}
