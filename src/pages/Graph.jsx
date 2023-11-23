import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const Graph = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["graphData"],
        queryFn: async () => {
            const response = await axios.get(`https://dpg.gg/test/calendar.json`);
            return response.data;
        },
    });
    if (isLoading) return "...Loading"

    if (error) return 'An error has occurred: ' + error.message

    console.log(data)
    return (
        <div className="graph">
            <h1>GitHub Contributions</h1>
            <div>

            </div>
        </div>
    );
};

export default Graph;