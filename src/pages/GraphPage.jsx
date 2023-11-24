import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Graph from "../components/Graph";

const GraphPage = () => {


    const { isLoading, error, data } = useQuery({
        queryKey: ["graphData"],
        queryFn: async () => {
            const response = await axios.get(`https://dpg.gg/test/calendar.json`);
            return response.data;
        },
    });
    if (isLoading) return "...Loading"

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="graphPage">
            <div className="graphPage-content">
                <Graph data={data}/>
            </div>
        </div>
    );
};

export default GraphPage;