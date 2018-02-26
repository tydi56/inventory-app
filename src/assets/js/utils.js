
// Get mock inventory data
// NOTE: The 'dimensions' property name was chosen instead
// of 'lengths' to avoid confusion between the Array property 'length'
export function getMockInvData() {
    return [
                {
                    location: 'Location 1',
                    operation: 'Rig Up',
                    serialNo: '11-13-17 205',
                    dimension: '40 ft.',
                    ok: true,
                    scrap: false,
                    reWeb: false,
                    comments: ''
                },
                {
                    location: 'Location 1',
                    operation: 'Rig Up',
                    serialNo: '4-11-17 2',
                    dimension: '30 ft.',
                    ok: true,
                    scrap: false,
                    reWeb: false,
                    comments: ''
                },
                {
                    location: 'Location 1',
                    operation: 'Rig Down',
                    serialNo: '10-31-17 44',
                    dimension: '80 ft.',
                    ok: true,
                    scrap: false,
                    reWeb: false,
                    comments: ''
                },
    
                {
                    location: 'Location 2',
                    operation: 'Rig Down',
                    serialNo: '2-8-17 7',
                    dimension: '25 ft.',
                    ok: true,
                    scrap: false,
                    reWeb: false,
                    comments: ''
                },
                {
                    location: 'Location 2',
                    operation: 'Rig Up',
                    serialNo: '10-31-17 31',
                    dimension: '100 ft.',
                    ok: true,
                    scrap: false,
                    reWeb: false,
                    comments: ''
                },
                {
                    location: 'Location 2',
                    operation: 'Rig Down',
                    serialNo: '7-26-17 160',
                    dimension: '80 ft.',
                    ok: true,
                    scrap: false,
                    reWeb: false,
                    comments: ''
                }
            ];
}