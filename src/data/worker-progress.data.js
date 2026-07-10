/**
 * Simulated backend responses for the Worker Progress Report.
 *
 * In a real system this object would come back from an API call keyed by
 * claim number; here it's hardcoded so the demo can switch between workers
 * without any data entry on screen (assignment requirement #3). "sampleA"
 * is a short, mostly-resolved claim; "sampleB" is a longer, still-open one
 * with much more free-text content, which is what pushes the report from
 * 3 pages to more - showing the footer/page-count adapting to data size
 * (requirement #4) rather than being hardcoded per page.
 */
window.WORKER_PROGRESS_DATASETS = {
  sampleA: {
    label: 'Sample A — Madeleine Wilson (returned to work, fully recovered)',
    claimNo: '20042047',
    workerName: 'Madeleine Wilson',
    workerAppId: '712041',
    submittedDate: 'March 19, 2024',
    submittedTime: '19:21',
    rtw: {
      status: 'returnedOn',
      returnedOnDate: 'March 15, 2024',
      workingMode: 'fullRegular',
      other: '',
      goingComment: 'Going well - back to my regular duties and keeping up fine with the workload.',
      expectedReturnDate: '',
      concerns: '',
      contactName: '',
      contactDate: '',
    },
    recovery: {
      status: 'fullyRecovered',
      comments: '',
    },
    painScale: 2,
    medicalTreatment: {
      status: 'notContinuing',
      providerType: '',
      lastTreatmentDate: 'March 8, 2024',
      lastTreatmentProvider: 'Dr. Best',
      nextTreatmentDate: '',
      nextTreatmentProvider: '',
      physioFrequency: '',
    },
    medication: {
      status: 'notTaking',
      name: '',
    },
    exercises: {
      status: 'notDoing',
      list: '',
    },
    otherInfo: 'No further information at this time.',
    declarations: {
      certifyTrue: true,
      privacyAcknowledged: true,
    },
  },

  sampleB: {
    label: 'Sample B — Jordan Marchetti (not yet returned, ongoing treatment)',
    claimNo: '20077231',
    workerName: 'Jordan Marchetti',
    workerAppId: '803217',
    submittedDate: 'May 2, 2024',
    submittedTime: '09:12',
    rtw: {
      status: 'notReturned',
      returnedOnDate: '',
      workingMode: null,
      other: '',
      goingComment:
        'I am still experiencing significant lower back pain that flares up whenever I try to sit or stand for more than about twenty minutes. ' +
        'My physiotherapist has advised against attempting even modified duties until the inflammation in my lower back has settled down further. ' +
        'I have been doing my prescribed stretches daily but progress has been slow, and I still need help with basic household tasks most days.',
      expectedReturnDate: 'June 3, 2024',
      concerns:
        'My main concern is that my workstation does not have a sit-stand option, and my previous requests for an ergonomic assessment were not ' +
        'followed up on before my injury. I am worried that returning to the same setup will cause a re-injury, and I would like an ergonomic ' +
        'assessment completed before any return-to-work plan is finalized.',
      contactName: 'Priya Kapoor',
      contactDate: 'April 28, 2024',
    },
    recovery: {
      status: 'notRecovered',
      comments:
        'Recovery has been slower than expected. The physiotherapist has noted improved range of motion in the last two weeks but continued ' +
        'muscle tightness and pain on flexion. An updated MRI has been requested by my treating physician to rule out any disc involvement, ' +
        'and I am waiting on a referral date for that at this time.',
    },
    painScale: 7,
    medicalTreatment: {
      status: 'continuing',
      providerType: 'Physiotherapist',
      lastTreatmentDate: 'April 29, 2024',
      lastTreatmentProvider: 'Pan Am Clinic',
      nextTreatmentDate: 'May 6, 2024',
      nextTreatmentProvider: 'Pan Am Clinic',
      physioFrequency: 'Twice weekly, 45-minute sessions',
    },
    medication: {
      status: 'taking',
      name: 'Naproxen 250mg (twice daily) and Cyclobenzaprine 10mg (as needed for muscle spasms)',
    },
    exercises: {
      status: 'doing',
      list:
        'Daily: pelvic tilts (3x15), cat-cow stretches (3x10), gentle hamstring stretches (hold 30s, both sides), and a 15-minute ' +
        'walk twice a day as tolerated. Physiotherapist added core-bracing exercises starting this week, to be done every second day.',
    },
    otherInfo:
      'I would also like to note that I have been in contact with my union representative regarding a gradual return-to-work plan, and would ' +
      'appreciate it if any correspondence about modified duties could be copied to them as well going forward.',
    declarations: {
      certifyTrue: true,
      privacyAcknowledged: true,
    },
  },
};
