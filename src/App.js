import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <p>Test</p>
    </div>
  );
}

export default App;

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};