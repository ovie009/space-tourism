import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const useHandlers = (linkArray, pathName) => {

    const history = useNavigate();

    return useSwipeable({
        onSwiped: (e) => {
            let targetPathIndex;
            let maxIndex = linkArray.length;
            let minIndex = 0;
            let swipeDirection = e.dir;
            let forwardSlashCount = pathName.split('/').length - 1;
            if (forwardSlashCount === 1) {
                pathName = linkArray[0];
            }
            let currentPathIndex = linkArray.indexOf(pathName);
            // console.log(pathName)
            // console.log(e.dir)

            // console.log("🚀 ~ file: Crew.js ~ line 34 ~ Crew ~ currentPageIndex", currentPathIndex)

            if (swipeDirection === 'Left') {
                targetPathIndex = currentPathIndex + 1;
                if (targetPathIndex === maxIndex) {
                    targetPathIndex = minIndex;
                }
                
            } else {
                targetPathIndex = currentPathIndex - 1;
                if (targetPathIndex < minIndex) {
                    targetPathIndex = maxIndex - 1;
                }
            }
            
            history(linkArray[targetPathIndex]);
        }
    });
}
 
export default useHandlers;