import { LineChart as LChart, Line , XAxis, YAxis,} from 'recharts';
// import { LineChart, Line, } from 'recharts';



const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Alice', math: 78, physics: 85, chemistry: 90 },
        { id: 2, name: 'Bob', math: 85, physics: 88, chemistry: 78 },
        { id: 3, name: 'Charlie', math: 92, physics: 94, chemistry: 89 },
        { id: 4, name: 'David', math: 68, physics: 76, chemistry: 80 },
        { id: 5, name: 'Eva', math: 76, physics: 82, chemistry: 85 },
        { id: 6, name: 'Frank', math: 88, physics: 90, chemistry: 92 },
        { id: 7, name: 'Grace', math: 95, physics: 96, chemistry: 97 },
        { id: 8, name: 'Helen', math: 72, physics: 75, chemistry: 82 },
        { id: 9, name: 'Ian', math: 90, physics: 88, chemistry: 91 },
        { id: 10, name: 'Jane', math: 84, physics: 89, chemistry: 86 }
    ];
   
    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey={'physics' }></Line>
           </LChart>
        </div>
    );
};

export default LineChart;