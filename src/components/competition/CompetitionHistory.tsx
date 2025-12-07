'use client'
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
export default function CompetitionHistory() {
    
    const history = [
        {name: "ICPC Thailand Regional 2025", date:new Date(2025, 10), url:"https://codeforces.com/gym/106164"},
        {name: "Computer IPST 2025", date:new Date(2025, 5), url:""},
        {name: "CodeAlgo 2025", date:new Date(2025, 4), url:"https://codeforces.com/group/iCoiOZBEDF/contest/603538"},
        {name: "ICPC Thailand National 2024", date:new Date(2024, 8), url:"https://codeforces.com/gym/106164"},
        {name: "CrackNCode 3rd Anniversary Contest", date:new Date(2024, 6), url:"https://codeforces.com/group/rn8uJP8lA7/contest/534000"},
        {name: "Computer IPST 2024", date:new Date(2024, 5), url:""},
        {name: "CrackNCode Pre TOI 20 #2", date:new Date(2024, 4), url:"https://codeforces.com/group/rn8uJP8lA7/contest/520623"},
        {name: "CrackNCode Pre TOI 20 #1", date:new Date(2024, 4), url:"https://codeforces.com/group/rn8uJP8lA7/contest/520621"},
        {name: "CrackNCode Pre POSN 2 2024 #2", date:new Date(2024, 2), url:"https://codeforces.com/group/rn8uJP8lA7/contest/511311"},
        {name: "CrackNCode Pre POSN 2 2024 #1", date:new Date(2024, 2), url:"https://codeforces.com/group/rn8uJP8lA7/contest/511310"},
        {name: "CrackNCode Pre POSN 1 2023", date:new Date(2023, 7), url:"https://codeforces.com/group/rn8uJP8lA7/contest/477436"},
        {name: "CrackNCode July 2023 Contest", date:new Date(2023, 6), url:"https://codeforces.com/group/rn8uJP8lA7/contest/450288"},
        {name: "CrackNCode June 2023 Contest", date:new Date(2023, 5), url:"https://codeforces.com/group/rn8uJP8lA7/contest/445724"},
        {name: "Computer IPST 2023", date:new Date(2023, 4), url:""},
        {name: "CrackNCode Pre POSN 2 2023 #2", date:new Date(2023, 3), url:"https://codeforces.com/group/rn8uJP8lA7/contest/435037"},
        {name: "CrackNCode Pre POSN 2 2023 #1", date:new Date(2023, 2), url:"https://codeforces.com/group/rn8uJP8lA7/contest/435034"},
        {name: "CrackNCode February 2023 Contest", date:new Date(2023, 1), url:"https://codeforces.com/group/rn8uJP8lA7/contest/424143"},
        {name: "CrackNCode January 2023 New Year Contest", date:new Date(2023, 0), url:"https://codeforces.com/group/rn8uJP8lA7/contest/416445"},
        {name: "CrackNCode December 2022 Contest", date:new Date(2022, 11), url:"https://codeforces.com/group/rn8uJP8lA7/contest/412635"},
        {name: "CrackNCode November 2022 Contest", date:new Date(2022, 10), url:"https://codeforces.com/group/rn8uJP8lA7/contest/406995"},
        {name: "CrackNCode Pre POSN 1 2022", date:new Date(2022, 9), url:"https://codeforces.com/group/rn8uJP8lA7/contest/402572"},
        {name: "CrackNCode October 2022 Contest" , date:new Date(2022, 9), url:"https://codeforces.com/group/rn8uJP8lA7/contest/398493"},
        {name: "CrackNCode September 2022 Contest" , date:new Date(2022, 8), url:"https://codeforces.com/group/rn8uJP8lA7/contest/397654"},
        {name: "CrackNCode August 2022 Contest" , date:new Date(2022, 7), url:"https://codeforces.com/group/rn8uJP8lA7/contest/392796"},
        {name: "Computer IPST 2022", date:new Date(2022, 4), url:""},
        {name: "Computer IPST 2021", date:new Date(2021, 4), url:""},
        {name: "SKOI 2019", date:new Date(2019, 0), url:""},
    ].map((hist, id) => ({...hist,id}));

    const columns: GridColDef[] = [
        { field: 'date', headerName: 'Contest Time', headerAlign: 'center', minWidth: 180, flex: 1, valueGetter: ((value, row) => (row.date.toLocaleString('default', { month: 'long', year: 'numeric' })))  },
        { field: 'name', headerName: 'Contest Name', headerAlign: 'center', minWidth: 200, flex: 2},
        {
            field: '',
            headerName: 'Contest redirect',
            filterable: false,
            flex: 1,
            headerAlign: 'center',
            minWidth: 100,
            renderCell: (params: GridRenderCellParams) => {
                const onClick = (e: React.MouseEvent) => {
                    e.stopPropagation();
                };
            
                return params.row.url != "" && (

                    <div className='flex justify-center items-center'>
                        <div className="w-1/2 min-w-30 bg-blue-200 justify-center items-center rounded-lg transition duration-300 text-black hover:font-bold hover:bg-green-400 cursor-pointer">
                            <a href={params.row.url} className='w-full flex justify-center' onClick={onClick} target="_blank">
                                Open contest
                            </a>
                        </div>
                    </div>
                )
            }
        },
    ]

    const paginationModel = { page: 0, pageSize: 10 };

    return <DataGrid className='overflow-x-auto'
            rows={history}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 20]}
            disableColumnSelector
            disableColumnResize
            disableRowSelectionOnClick
            sx={{
                overflowX: 'scroll',
                backgroundColor: '#fff9eaff',
                border: 0,
                borderColor: 'primary.light',
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: '#feefc8ff',
                    color: '#000',
                    fontSize: 16,
                },

                '& .MuiDataGrid-footerContainer': {
                    backgroundColor: '#fff9eaff',
                },

                '& .MuiDataGrid-row:hover': {
                    backgroundColor: '#e0f2fe',
                },
            }}>

    </DataGrid>
}