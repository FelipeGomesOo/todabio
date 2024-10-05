const Samples: { [key: string]: Sample } = {
  sample1: {
    hashId: "sample1",
    sampleType: "Water",
    location: { lat: -1.4558, lng: -48.4902 },
    CollectionDate: "2021-01-15",
    creditId: "1",
    depth: "20m",
    DNA_Concentration: 1.045,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 60, Jupiá: 25, Rosana: 15 },
        files: {
          file1: "https://example.com/sample1/file1",
          file2: "https://example.com/sample1/file2",
        },
      },
      COI: {
        DAPC: { Acre: 55, Guadalupe: 30, Florença: 15 },
        files: {
          file1: "https://example.com/sample1/coi_file1",
          file2: "https://example.com/sample1/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 45, Madureira: 35, "Três Irmãos": 20 },
        files: {
          file1: "https://example.com/sample1/16s_file1",
          file2: "https://example.com/sample1/16s_file2",
        },
      },
    },
  },
  sample2: {
    hashId: "sample2",
    sampleType: "Soil",
    location: { lat: -1.5558, lng: -48.5902 },
    CollectionDate: "2021-02-15",
    creditId: "2",
    depth: "30m",
    DNA_Concentration: 2.145,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 50, Jupiá: 40, Rosana: 10 },
        files: {
          file1: "https://example.com/sample2/file1",
          file2: "https://example.com/sample2/file2",
        },
      },
      COI: {
        DAPC: { Acre: 40, Guadalupe: 45, Florença: 15 },
        files: {
          file1: "https://example.com/sample2/coi_file1",
          file2: "https://example.com/sample2/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 35, Madureira: 50, "Três Irmãos": 15 },
        files: {
          file1: "https://example.com/sample2/16s_file1",
          file2: "https://example.com/sample2/16s_file2",
        },
      },
    },
  },
  sample3: {
    hashId: "sample3",
    sampleType: "Water",
    location: { lat: -1.6558, lng: -48.6902 },
    CollectionDate: "2021-03-10",
    creditId: "3",
    depth: "25m",
    DNA_Concentration: 1.785,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 65, Jupiá: 15, Rosana: 20 },
        files: {
          file1: "https://example.com/sample3/file1",
          file2: "https://example.com/sample3/file2",
        },
      },
      COI: {
        DAPC: { Acre: 30, Guadalupe: 50, Florença: 20 },
        files: {
          file1: "https://example.com/sample3/coi_file1",
          file2: "https://example.com/sample3/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 40, Madureira: 30, "Três Irmãos": 30 },
        files: {
          file1: "https://example.com/sample3/16s_file1",
          file2: "https://example.com/sample3/16s_file2",
        },
      },
    },
  },
  sample4: {
    hashId: "sample4",
    sampleType: "Soil",
    location: { lat: -1.7558, lng: -48.7902 },
    CollectionDate: "2021-04-05",
    creditId: "4",
    depth: "40m",
    DNA_Concentration: 3.245,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 55, Jupiá: 25, Rosana: 20 },
        files: {
          file1: "https://example.com/sample4/file1",
          file2: "https://example.com/sample4/file2",
        },
      },
      COI: {
        DAPC: { Acre: 50, Guadalupe: 30, Florença: 20 },
        files: {
          file1: "https://example.com/sample4/coi_file1",
          file2: "https://example.com/sample4/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 45, Madureira: 40, "Três Irmãos": 15 },
        files: {
          file1: "https://example.com/sample4/16s_file1",
          file2: "https://example.com/sample4/16s_file2",
        },
      },
    },
  },
  sample5: {
    hashId: "sample5",
    sampleType: "Water",
    location: { lat: -1.8558, lng: -48.8902 },
    CollectionDate: "2021-05-12",
    creditId: "5",
    depth: "15m",
    DNA_Concentration: 1.465,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 70, Jupiá: 20, Rosana: 10 },
        files: {
          file1: "https://example.com/sample5/file1",
          file2: "https://example.com/sample5/file2",
        },
      },
      COI: {
        DAPC: { Acre: 60, Guadalupe: 30, Florença: 10 },
        files: {
          file1: "https://example.com/sample5/coi_file1",
          file2: "https://example.com/sample5/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 50, Madureira: 25, "Três Irmãos": 25 },
        files: {
          file1: "https://example.com/sample5/16s_file1",
          file2: "https://example.com/sample5/16s_file2",
        },
      },
    },
  },
  sample6: {
    hashId: "sample6",
    sampleType: "Soil",
    location: { lat: -1.9558, lng: -48.9902 },
    CollectionDate: "2021-06-20",
    creditId: "6",
    depth: "35m",
    DNA_Concentration: 2.865,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 30, Jupiá: 50, Rosana: 20 },
        files: {
          file1: "https://example.com/sample6/file1",
          file2: "https://example.com/sample6/file2",
        },
      },
      COI: {
        DAPC: { Acre: 55, Guadalupe: 25, Florença: 20 },
        files: {
          file1: "https://example.com/sample6/coi_file1",
          file2: "https://example.com/sample6/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 20, Madureira: 60, "Três Irmãos": 20 },
        files: {
          file1: "https://example.com/sample6/16s_file1",
          file2: "https://example.com/sample6/16s_file2",
        },
      },
    },
  },
  sample7: {
    hashId: "sample7",
    sampleType: "Water",
    location: { lat: -2.0558, lng: -49.0902 },
    CollectionDate: "2021-07-15",
    creditId: "7",
    depth: "10m",
    DNA_Concentration: 1.245,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 40, Jupiá: 35, Rosana: 25 },
        files: {
          file1: "https://example.com/sample7/file1",
          file2: "https://example.com/sample7/file2",
        },
      },
      COI: {
        DAPC: { Acre: 65, Guadalupe: 25, Florença: 10 },
        files: {
          file1: "https://example.com/sample7/coi_file1",
          file2: "https://example.com/sample7/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 50, Madureira: 30, "Três Irmãos": 20 },
        files: {
          file1: "https://example.com/sample7/16s_file1",
          file2: "https://example.com/sample7/16s_file2",
        },
      },
    },
  },
  sample8: {
    hashId: "sample8",
    sampleType: "Soil",
    location: { lat: -2.1558, lng: -49.1902 },
    CollectionDate: "2021-08-05",
    creditId: "8",
    depth: "50m",
    DNA_Concentration: 2.115,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 25, Jupiá: 25, Rosana: 50 },
        files: {
          file1: "https://example.com/sample8/file1",
          file2: "https://example.com/sample8/file2",
        },
      },
      COI: {
        DAPC: { Acre: 70, Guadalupe: 20, Florença: 10 },
        files: {
          file1: "https://example.com/sample8/coi_file1",
          file2: "https://example.com/sample8/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 30, Madureira: 50, "Três Irmãos": 20 },
        files: {
          file1: "https://example.com/sample8/16s_file1",
          file2: "https://example.com/sample8/16s_file2",
        },
      },
    },
  },
  sample9: {
    hashId: "sample9",
    sampleType: "Water",
    location: { lat: -2.2558, lng: -49.2902 },
    CollectionDate: "2021-09-10",
    creditId: "9",
    depth: "15m",
    DNA_Concentration: 1.645,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 60, Jupiá: 30, Rosana: 10 },
        files: {
          file1: "https://example.com/sample9/file1",
          file2: "https://example.com/sample9/file2",
        },
      },
      COI: {
        DAPC: { Acre: 35, Guadalupe: 55, Florença: 10 },
        files: {
          file1: "https://example.com/sample9/coi_file1",
          file2: "https://example.com/sample9/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 20, Madureira: 40, "Três Irmãos": 40 },
        files: {
          file1: "https://example.com/sample9/16s_file1",
          file2: "https://example.com/sample9/16s_file2",
        },
      },
    },
  },
  sample10: {
    hashId: "sample10",
    sampleType: "Soil",
    location: { lat: -2.3558, lng: -49.3902 },
    CollectionDate: "2021-10-05",
    creditId: "10",
    depth: "45m",
    DNA_Concentration: 2.365,
    Sample_Markers: {
      "12S": {
        DAPC: { Acre: 50, Jupiá: 30, Rosana: 20 },
        files: {
          file1: "https://example.com/sample10/file1",
          file2: "https://example.com/sample10/file2",
        },
      },
      COI: {
        DAPC: { Acre: 45, Guadalupe: 40, Florença: 15 },
        files: {
          file1: "https://example.com/sample10/coi_file1",
          file2: "https://example.com/sample10/coi_file2",
        },
      },
      "16S": {
        DAPC: { Acre: 30, Madureira: 50, "Três Irmãos": 20 },
        files: {
          file1: "https://example.com/sample10/16s_file1",
          file2: "https://example.com/sample10/16s_file2",
        },
      },
    },
  },
};

export default Samples;
