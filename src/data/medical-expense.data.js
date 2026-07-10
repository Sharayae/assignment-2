/**
 * Simulated backend response for the Medical & Travel Expense Request.
 *
 * MEDICAL_EXPENSE_CATEGORIES is the fixed schema (columns, notes, which
 * column holds a dollar amount) - it mirrors the six expense categories on
 * the reference PDF and never changes per worker. MEDICAL_EXPENSE_DATASETS
 * supplies only the row data per category per worker, standing in for what
 * a real backend would return for a given claim. A missing category key
 * means that worker didn't submit anything in that category, and the app
 * simply omits that table (mirrors assignment 1's behaviour).
 *
 * "sampleA" is a light claim that matches the reference PDF's row counts.
 * "sampleB" has many more rows (particularly mileage) so the demo can show
 * the table - and therefore the footer - spilling across multiple A4
 * pages, which is the "footer placement depending on the size of the data"
 * requirement in action.
 */
window.MEDICAL_EXPENSE_CATEGORIES = [
  {
    key: 'prescription',
    title: 'Prescription Drugs',
    columns: [
      { label: 'Drug Name', width: 18 },
      { label: 'Prescription Date', width: 18 },
      { label: 'Date Purchased', width: 18 },
      { label: 'Healthcare Provider Name', width: 28 },
      { label: 'Paid Amount', width: 18 },
    ],
    amountIndex: 4,
  },
  {
    key: 'otc',
    title: 'Over-the-Counter Drugs',
    columns: [
      { label: 'Drug Name', width: 16 },
      { label: 'Date Purchased', width: 18 },
      { label: 'Paid Amount', width: 14 },
      { label: "Seller's Name", width: 24 },
      { label: 'Reason for Purchasing', width: 28 },
    ],
    amountIndex: 2,
  },
  {
    key: 'supplies',
    title: 'Bandages, Braces or Other Medical Supplies',
    columns: [
      { label: 'Item Purchased', width: 16 },
      { label: 'Date Purchased', width: 14 },
      { label: 'Was It Pre-Approved?', width: 16 },
      { label: 'Healthcare Provider Name', width: 20 },
      { label: 'Paid Amount', width: 12 },
      { label: "Seller's Name", width: 22 },
    ],
    amountIndex: 4,
  },
  {
    key: 'parking',
    title: 'Parking for Medical Appointments',
    columns: [
      { label: 'Address of Healthcare Provider/Medical Facility', width: 40 },
      { label: 'Date', width: 15 },
      { label: 'Paid Amount', width: 13 },
      { label: 'Meter Used?', width: 13 },
      { label: 'Meter Number', width: 19 },
    ],
    amountIndex: 2,
  },
  {
    key: 'mileage',
    title: 'Mileage to Medical Appointments',
    note:
      'The WCB will generally reimburse only those transportation costs which are in excess of costs that would ' +
      'be incurred by the worker while travelling to and from work.',
    columns: [
      { label: 'Appointment Date', width: 14 },
      { label: 'Address of Healthcare Provider/Medical Facility', width: 36 },
      { label: 'Address of Workplace', width: 36 },
      { label: 'Number of km (Round Trip)', width: 14 },
    ],
    amountIndex: -1,
  },
  {
    key: 'bustaxi',
    title: 'Bus or Taxi Fare for Medical Appointments',
    note: '*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).',
    columns: [
      { label: 'Appointment Date', width: 14 },
      { label: 'Address of Starting Point', width: 28 },
      { label: 'Address of Healthcare Provider/Medical Facility', width: 32 },
      { label: 'Bus or Taxi (indicate one)', width: 13 },
      { label: 'Total Fare Paid', width: 13 },
    ],
    amountIndex: 4,
  },
];

window.MEDICAL_EXPENSE_DATASETS = {
  sampleA: {
    label: 'Sample A — Madeleine Wilson (matches reference PDF)',
    claimNo: '2042067',
    workerName: 'Madeleine Wilson',
    workerAppId: '7125041',
    submittedDate: 'March 28, 2024',
    submittedTime: '20:43',
    privacyAcknowledged: true,
    rows: {
      prescription: [['Naproxen', 'February 28, 2024', 'February 29, 2024', 'Dr. Best', '$20.00']],
      otc: [['Advil', 'March 08, 2024', '$8.00', 'Shoppers Drug Mart', 'Pain']],
      supplies: [['Tensor', 'February 28, 2024', 'Yes', 'Dr. Best', '$10.00', 'Shoppers Drug Mart']],
      parking: [['333 St Mary Ave, Winnipeg MB R3C 4A5, Canada', 'March 28, 2024', '$10.00', 'Yes', '12345']],
      mileage: [
        [
          'March 28, 2024',
          'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada',
          'WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada',
          '20 km',
        ],
      ],
      bustaxi: [
        ['March 28, 2024', '', "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", 'Bus', '$3.00'],
        ['March 27, 2024', '25 Furby St, Winnipeg MB R3C 2A2, Canada', '440 Edmonton St, Winnipeg MB R3B 2M4, Canada', 'Taxi', '$15.00'],
      ],
    },
  },

  sampleB: {
    label: 'Sample B — Priya Kapoor (12 mileage trips, multiple categories)',
    claimNo: '2063325',
    workerName: 'Priya Kapoor',
    workerAppId: '918842',
    submittedDate: 'June 30, 2024',
    submittedTime: '11:26',
    privacyAcknowledged: true,
    rows: {
      prescription: [
        ['Naproxen', 'April 2, 2024', 'April 2, 2024', 'Dr. Best', '$20.00'],
        ['Cyclobenzaprine', 'April 16, 2024', 'April 17, 2024', 'Dr. Best', '$14.50'],
        ['Naproxen', 'May 14, 2024', 'May 14, 2024', 'Dr. Best', '$20.00'],
      ],
      supplies: [
        ['Lumbar brace', 'April 3, 2024', 'Yes', 'Dr. Best', '$45.00', 'Shoppers Drug Mart'],
        ['Tensor bandage', 'April 20, 2024', 'No', '', '$9.00', 'Walmart'],
      ],
      parking: [
        ['75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'April 2, 2024', '$8.00', 'Yes', '55210'],
        ['75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'April 16, 2024', '$8.00', 'Yes', '55210'],
      ],
      mileage: [
        ['April 2, 2024', 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '18 km'],
        ['April 9, 2024', 'Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '22 km'],
        ['April 16, 2024', 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '18 km'],
        ['April 23, 2024', 'Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '22 km'],
        ['April 30, 2024', 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '18 km'],
        ['May 7, 2024', 'Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '22 km'],
        ['May 14, 2024', 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '18 km'],
        ['May 21, 2024', 'Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '22 km'],
        ['May 28, 2024', 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '18 km'],
        ['June 4, 2024', 'Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '22 km'],
        ['June 11, 2024', 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '18 km'],
        ['June 18, 2024', 'Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'RBC Convention Centre, 375 York Ave, Winnipeg MB, Canada', '22 km'],
      ],
      bustaxi: [
        ['April 5, 2024', '25 Furby St, Winnipeg MB R3C 2A2, Canada', 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', 'Bus', '$3.00'],
        ['April 19, 2024', '25 Furby St, Winnipeg MB R3C 2A2, Canada', 'Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E4, Canada', 'Taxi', '$18.00'],
        ['May 3, 2024', '25 Furby St, Winnipeg MB R3C 2A2, Canada', 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', 'Bus', '$3.00'],
      ],
    },
  },
};
