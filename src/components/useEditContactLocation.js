import { useLocation } from 'react-router-dom';

export default function useEditContactLocation(){
  const location = useLocation();
  const { id, name, email } = location.state?.contact || {};
  return { id, name, email };
}



// const useEditContactLocation = () => {
//   const location = useLocation();
//   const { id, name, email } = location.state?.contact || {};
//   return { id, name, email };
// };
// export default useEditContactLocation
