import ProdItem from './ProdItem';
import data from '../../dummyData';

function ProdListMain() {
  return (
    <>
      {data.map((item, index) => (
        <ProdItem {...item} key={index} />
      ))}
    </>
  );
}

export default ProdListMain;
