const Samples: Sample[] = [
  {
    hashId: "TZ425BR",
    sampleType: "Soil",
    location: { lat: -3.1234, lng: -50.1234 },
    CollectionDate: "2021-03-10",
    creditId: "2",
    depth: "30m",
    DNA_Concentration: 2.345,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-15-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward2.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse2.com",
        SHA256_Forward:
          "6f17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "c02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "5adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV2.com",
        qPCR_nM: 10.846,
        Pipeline_Log: "https://url-pipeline-log2.com",
        DAPC: {
          Acre: 49.24,
          Jupiá: 25.84,
          Rosana: 91.42,
          Guadalupe: 23.78,
          "Bom Jardim": 8.01,
          Florença: 88.15,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-15-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward2.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse2.com",
        SHA256_Forward:
          "7e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "d22dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "5adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV2.com",
        qPCR_nM: 150.921,
        Pipeline_Log: "https://url-pipeline-log2.com",
        DAPC: {
          Acre: 15.02,
          Jupiá: 23.47,
          Rosana: 35.87,
          Guadalupe: 72.49,
          "Bom Jardim": 33.66,
          Florença: 2.66,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-15-60-16S-1",
        URL_FASTQ_Forward: "https://url-fastq-forward1.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse1.com",
        SHA256_Forward:
          "a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_Reverse:
          "b1c2d3e4f5a67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_fastaASV:
          "c1d2e3f4a567890abcdef1234567890abcdef1234567890abcdef1234567890",
        URL_fastaASV: "https://url-fastaASV1.com",
        qPCR_nM: 25.5,
        Pipeline_Log: "https://url-pipeline-log1.com",
        DAPC: {
          Acre: 47.49,
          Jupiá: 31.93,
          Rosana: 65.95,
          Guadalupe: 8.61,
          "Bom Jardim": 2.2,
          Florença: 58.55,
        },
      },
    ],
  },
  {
    hashId: "TZ425AR",
    sampleType: "Water",
    location: { lat: -2.4567, lng: -47.8765 },
    CollectionDate: "2021-02-12",
    creditId: "3",
    depth: "25m",
    DNA_Concentration: 1.678,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "10281XD-20-70-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward3.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse3.com",
        SHA256_Forward:
          "8e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "a02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "6adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV3.com",
        qPCR_nM: 5.129,
        Pipeline_Log: "https://url-pipeline-log3.com",
        DAPC: {
          Acre: 12.5,
          Jupiá: 28.78,
          Rosana: 72.33,
          Guadalupe: 88.05,
          "Bom Jardim": 30.51,
          Florença: 2.92,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "10281XD-20-70-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward3.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse3.com",
        SHA256_Forward:
          "9e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "b02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "7adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV3.com",
        qPCR_nM: 120.512,
        Pipeline_Log: "https://url-pipeline-log3.com",
        DAPC: {
          Acre: 16.15,
          Jupiá: 19.27,
          Rosana: 72.9,
          Guadalupe: 19.54,
          "Bom Jardim": 14.54,
          Florença: 80.08,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-15-60-16S-2",
        URL_FASTQ_Forward: "https://url-fastq-forward2.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse2.com",
        SHA256_Forward:
          "d1e2f3a4b5c67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_Reverse:
          "e1f2a3b4c5d67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_fastaASV:
          "f1a2b3c4d567890abcdef1234567890abcdef1234567890abcdef1234567890",
        URL_fastaASV: "https://url-fastaASV2.com",
        qPCR_nM: 30.0,
        Pipeline_Log: "https://url-pipeline-log2.com",
        DAPC: {
          Acre: 20.29,
          Jupiá: 77.11,
          Rosana: 88.11,
          Guadalupe: 18.18,
          "Bom Jardim": 56.03,
          Florença: 4.22,
        },
      },
    ],
  },
  {
    hashId: "TZ425BK",
    sampleType: "Water",
    location: { lat: -1.789, lng: -48.561 },
    CollectionDate: "2021-03-18",
    creditId: "4",
    depth: "18m",
    DNA_Concentration: 1.567,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "10181XD-25-65-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward4.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse4.com",
        SHA256_Forward:
          "5f17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "f02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "8adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV4.com",
        qPCR_nM: 4.953,
        Pipeline_Log: "https://url-pipeline-log4.com",
        DAPC: {
          Acre: 31.46,
          Jupiá: 64.21,
          Rosana: 67.94,
          Guadalupe: 10.1,
          "Bom Jardim": 87.12,
          Florença: 28.78,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "10181XD-25-65-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward4.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse4.com",
        SHA256_Forward:
          "3e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "d02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "9adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV4.com",
        qPCR_nM: 135.781,
        Pipeline_Log: "https://url-pipeline-log4.com",
        DAPC: {
          Acre: 85.92,
          Jupiá: 84.24,
          Rosana: 96.06,
          Guadalupe: 77.65,
          "Bom Jardim": 51.11,
          Florença: 84.46,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-15-60-16S-3",
        URL_FASTQ_Forward: "https://url-fastq-forward3.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse3.com",
        SHA256_Forward:
          "g1h2i3j4k5l67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_Reverse:
          "h1i2j3k4l5m67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_fastaASV:
          "i1j2k3l4m567890abcdef1234567890abcdef1234567890abcdef1234567890",
        URL_fastaASV: "https://url-fastaASV3.com",
        qPCR_nM: 15.8,
        Pipeline_Log: "https://url-pipeline-log3.com",
        DAPC: {
          Acre: 90.54,
          Jupiá: 94.82,
          Rosana: 30.41,
          Guadalupe: 36.49,
          "Bom Jardim": 57.1,
          Florença: 66.55,
        },
      },
    ],
  },
  {
    hashId: "TZ425CF",
    sampleType: "Soil",
    location: { lat: -4.1234, lng: -49.5678 },
    CollectionDate: "2021-04-05",
    creditId: "5",
    depth: "12m",
    DNA_Concentration: 2.135,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "10281XD-30-70-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward5.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse5.com",
        SHA256_Forward:
          "4e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "f22dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "1adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV5.com",
        qPCR_nM: 8.946,
        Pipeline_Log: "https://url-pipeline-log5.com",
        DAPC: {
          Acre: 52.7,
          Jupiá: 55.51,
          Rosana: 96.02,
          Guadalupe: 84.13,
          "Bom Jardim": 82.33,
          Florença: 69.01,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "10281XD-30-70-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward5.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse5.com",
        SHA256_Forward:
          "8e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "d42dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV5.com",
        qPCR_nM: 145.928,
        Pipeline_Log: "https://url-pipeline-log5.com",
        DAPC: {
          Acre: 69.23,
          Jupiá: 6.54,
          Rosana: 39.29,
          Guadalupe: 59.04,
          "Bom Jardim": 58.09,
          Florença: 91.01,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-15-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward4.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse4.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_fastaASV:
          "l1m2n3o4p567890abcdef1234567890abcdef1234567890abcdef1234567890",
        URL_fastaASV: "https://url-fastaASV4.com",
        qPCR_nM: 45.2,
        Pipeline_Log: "https://url-pipeline-log4.com",
        DAPC: {
          Acre: 37.52,
          Jupiá: 30.22,
          Rosana: 43.85,
          Guadalupe: 65.78,
          "Bom Jardim": 41.42,
          Florença: 32.55,
        },
      },
    ],
  },
  {
    hashId: "TZ425DE",
    sampleType: "Water",
    location: { lat: -2.9876, lng: -48.7654 },
    CollectionDate: "2021-05-25",
    creditId: "6",
    depth: "22m",
    DNA_Concentration: 2.012,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "13281XD-20-75-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "6f17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "a02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "7adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 3.541,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Acre: 20.25,
          Jupiá: 36.43,
          Rosana: 36.3,
          Guadalupe: 23.51,
          "Bom Jardim": 72.93,
          Florença: 31.07,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "13281XD-20-75-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "5f17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d129",
        SHA256_Reverse:
          "f12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f616fb",
        SHA256_fastaASV:
          "9adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449ef",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 150.746,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Acre: 94.01,
          Jupiá: 86.82,
          Rosana: 49.32,
          Guadalupe: 80.59,
          "Bom Jardim": 20.58,
          Florença: 23.25,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-15-60-16S-5",
        URL_FASTQ_Forward: "https://url-fastq-forward5.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse5.com",
        SHA256_Forward:
          "m1n2o3p4q5r67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_Reverse:
          "n1o2p3q4r5s67890abcdef1234567890abcdef1234567890abcdef1234567890",
        SHA256_fastaASV:
          "o1p2q3r4s567890abcdef1234567890abcdef1234567890abcdef1234567890",
        URL_fastaASV: "https://url-fastaASV5.com",
        qPCR_nM: 50.0,
        Pipeline_Log: "https://url-pipeline-log5.com",
        DAPC: {
          Acre: 3.39,
          Jupiá: 44.31,
          Rosana: 16.82,
          Guadalupe: 45.08,
          "Bom Jardim": 70.94,
          Florença: 66.83,
        },
      },
    ],
  },
  {
    hashId: "TZ426BR",
    sampleType: "Soil",
    location: { lat: -3.5678, lng: -50.5678 },
    CollectionDate: "2021-03-12",
    creditId: "3",
    depth: "20m",
    DNA_Concentration: 3.456,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward3.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse3.com",
        SHA256_Forward:
          "3f17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d130",
        SHA256_Reverse:
          "f02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6170",
        SHA256_fastaASV:
          "6adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f0",
        URL_fastaASV: "https://url-fastaASV3.com",
        qPCR_nM: 15.846,
        Pipeline_Log: "https://url-pipeline-log3.com",
        DAPC: {
          Acre: 60.12,
          Jupiá: 3.9,
          Rosana: 6.12,
          Guadalupe: 5.58,
          "Bom Jardim": 64.12,
          Florença: 14.13,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward3.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse3.com",
        SHA256_Forward:
          "8e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d130",
        SHA256_Reverse:
          "e12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6171",
        SHA256_fastaASV:
          "7adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f1",
        URL_fastaASV: "https://url-fastaASV3.com",
        qPCR_nM: 200.921,
        Pipeline_Log: "https://url-pipeline-log3.com",
        DAPC: {
          Acre: 15.05,
          Jupiá: 98.96,
          Rosana: 25.72,
          Guadalupe: 56.97,
          "Bom Jardim": 99.45,
          Florença: 96.12,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-1",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567891",
        SHA256_Reverse:
          "b1c2d3e4f5g67890abcdef1234567890abcdef1234567890abcdef1234567891",
        SHA256_fastaASV:
          "c1d2e3f4g5h67890abcdef1234567890abcdef1234567890abcdef1234567891",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 55.0,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Acre: 84.79,
          Jupiá: 76.83,
          Rosana: 40.77,
          Guadalupe: 55.85,
          "Bom Jardim": 94.42,
          Florença: 29.16,
        },
      },
    ],
  },
  {
    hashId: "TZ427BR",
    sampleType: "Soil",
    location: { lat: -3.2345, lng: -50.2345 },
    CollectionDate: "2021-04-10",
    creditId: "4",
    depth: "25m",
    DNA_Concentration: 4.123,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-17-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward4.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse4.com",
        SHA256_Forward:
          "4f17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d131",
        SHA256_Reverse:
          "g02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6172",
        SHA256_fastaASV:
          "8adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f2",
        URL_fastaASV: "https://url-fastaASV4.com",
        qPCR_nM: 12.234,
        Pipeline_Log: "https://url-pipeline-log4.com",
        DAPC: {
          Acre: 72.38,
          Jupiá: 14.8,
          Rosana: 42.14,
          Guadalupe: 98.25,
          "Bom Jardim": 88.73,
          Florença: 79.43,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-17-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward4.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse4.com",
        SHA256_Forward:
          "9e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d131",
        SHA256_Reverse:
          "h12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6173",
        SHA256_fastaASV:
          "9adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f3",
        URL_fastaASV: "https://url-fastaASV4.com",
        qPCR_nM: 170.234,
        Pipeline_Log: "https://url-pipeline-log4.com",
        DAPC: {
          Acre: 18.99,
          Jupiá: 90.7,
          Rosana: 31.02,
          Guadalupe: 3.78,
          "Bom Jardim": 31.97,
          Florença: 44.01,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-2",
        URL_FASTQ_Forward: "https://url-fastq-forward7.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse7.com",
        SHA256_Forward:
          "d1e2f3g4h5i67890abcdef1234567890abcdef1234567890abcdef1234567892",
        SHA256_Reverse:
          "e1f2g3h4i5j67890abcdef1234567890abcdef1234567890abcdef1234567892",
        SHA256_fastaASV:
          "f1g2h3i4j5k67890abcdef1234567890abcdef1234567890abcdef1234567892",
        URL_fastaASV: "https://url-fastaASV7.com",
        qPCR_nM: 60.0,
        Pipeline_Log: "https://url-pipeline-log7.com",
        DAPC: {
          Acre: 8.6,
          Jupiá: 82.91,
          Rosana: 83.72,
          Guadalupe: 15.83,
          "Bom Jardim": 28.47,
          Florença: 15.54,
        },
      },
    ],
  },
  {
    hashId: "TZ428BR",
    sampleType: "Soil",
    location: { lat: -3.5679, lng: -50.6789 },
    CollectionDate: "2021-05-10",
    creditId: "5",
    depth: "15m",
    DNA_Concentration: 1.789,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-18-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward5.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse5.com",
        SHA256_Forward:
          "1f17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d132",
        SHA256_Reverse:
          "i02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6174",
        SHA256_fastaASV:
          "0adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f4",
        URL_fastaASV: "https://url-fastaASV5.com",
        qPCR_nM: 8.234,
        Pipeline_Log: "https://url-pipeline-log5.com",
        DAPC: {
          Acre: 5.97,
          Jupiá: 81.78,
          Rosana: 84.82,
          Guadalupe: 92.59,
          "Bom Jardim": 37.06,
          Florença: 57.82,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-18-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward5.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse5.com",
        SHA256_Forward:
          "2e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d132",
        SHA256_Reverse:
          "j12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6175",
        SHA256_fastaASV:
          "1adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f5",
        URL_fastaASV: "https://url-fastaASV5.com",
        qPCR_nM: 180.123,
        Pipeline_Log: "https://url-pipeline-log5.com",
        DAPC: {
          Acre: 97.66,
          Jupiá: 99.97,
          Rosana: 13.75,
          Guadalupe: 70.24,
          "Bom Jardim": 15.49,
          Florença: 3.13,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-3",
        URL_FASTQ_Forward: "https://url-fastq-forward8.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse8.com",
        SHA256_Forward:
          "g1h2i3j4k5l67890abcdef1234567890abcdef1234567890abcdef1234567893",
        SHA256_Reverse:
          "h1i2j3k4l5m67890abcdef1234567890abcdef1234567890abcdef1234567893",
        SHA256_fastaASV:
          "i1j2k3l4m5n67890abcdef1234567890abcdef1234567890abcdef1234567893",
        URL_fastaASV: "https://url-fastaASV8.com",
        qPCR_nM: 65.0,
        Pipeline_Log: "https://url-pipeline-log8.com",
        DAPC: {
          Acre: 97.61,
          Jupiá: 1.52,
          Rosana: 79.73,
          Guadalupe: 47.23,
          "Bom Jardim": 41.46,
          Florença: 83.9,
        },
      },
    ],
  },
  {
    hashId: "TZ429BR",
    sampleType: "Soil",
    location: { lat: -3.6789, lng: -50.789 },
    CollectionDate: "2021-06-10",
    creditId: "6",
    depth: "35m",
    DNA_Concentration: 3.678,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Acre: 6.48,
          Jupiá: 57.88,
          Rosana: 38.02,
          Guadalupe: 62.98,
          "Bom Jardim": 86.65,
          Florença: 90.13,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Acre: 50.08,
          Jupiá: 95.54,
          Rosana: 47.57,
          Guadalupe: 64.82,
          "Bom Jardim": 58.71,
          Florença: 43.83,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Acre: 60.75,
          Jupiá: 28.04,
          Rosana: 89.91,
          Guadalupe: 11.44,
          "Bom Jardim": 59.22,
          Florença: 73.89,
        },
      },
    ],
  },
  {
    hashId: "TZ430BR",
    sampleType: "Soil",
    location: { lat: -3.789, lng: -50.8901 },
    CollectionDate: "2021-07-10",
    creditId: "7",
    depth: "40m",
    DNA_Concentration: 5.001,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-20-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward7.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse7.com",
        SHA256_Forward:
          "5f17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d134",
        SHA256_Reverse:
          "m02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6178",
        SHA256_fastaASV:
          "5adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f8",
        URL_fastaASV: "https://url-fastaASV7.com",
        qPCR_nM: 30.456,
        Pipeline_Log: "https://url-pipeline-log7.com",
        DAPC: {
          Acre: 22.28,
          Jupiá: 86.49,
          Rosana: 89.69,
          Guadalupe: 41.94,
          "Bom Jardim": 5.47,
          Florença: 30.49,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-20-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward7.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse7.com",
        SHA256_Forward:
          "6e17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d134",
        SHA256_Reverse:
          "n12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6179",
        SHA256_fastaASV:
          "3adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f9",
        URL_fastaASV: "https://url-fastaASV7.com",
        qPCR_nM: 250.456,
        Pipeline_Log: "https://url-pipeline-log7.com",
        DAPC: {
          Acre: 28.57,
          Jupiá: 50.79,
          Rosana: 31.36,
          Guadalupe: 56.29,
          "Bom Jardim": 24.86,
          Florença: 56.11,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-5",
        URL_FASTQ_Forward: "https://url-fastq-forward10.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse10.com",
        SHA256_Forward:
          "m1n2o3p4q5r67890abcdef1234567890abcdef1234567890abcdef1234567895",
        SHA256_Reverse:
          "n1o2p3q4r5s67890abcdef1234567890abcdef1234567890abcdef1234567895",
        SHA256_fastaASV:
          "o1p2q3r4s567890abcdef1234567890abcdef1234567890abcdef1234567895",
        URL_fastaASV: "https://url-fastaASV10.com",
        qPCR_nM: 75.0,
        Pipeline_Log: "https://url-pipeline-log10.com",
        DAPC: {
          Acre: 61.43,
          Jupiá: 12.55,
          Rosana: 73.3,
          Guadalupe: 13.06,
          "Bom Jardim": 79.27,
          Florença: 86.45,
        },
      },
    ],
  },
  {
    hashId: "RJ100BR",
    sampleType: "Soil",
    location: { lat: -22.905, lng: -43.195 },
    CollectionDate: "2023-03-11",
    creditId: "12",
    depth: "35m",
    DNA_Concentration: 4.245,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 49.24,
          Madureira: 25.84,
          Rosana: 91.42,
          Guadalupe: 23.78,
          "Bom Jardim": 8.01,
          Florença: 88.15,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 15.02,
          Madureira: 23.47,
          Rosana: 35.87,
          Guadalupe: 72.49,
          "Bom Jardim": 33.66,
          Florença: 2.66,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 47.49,
          Madureira: 31.93,
          Rosana: 65.95,
          Guadalupe: 8.61,
          "Bom Jardim": 2.2,
          Florença: 58.55,
        },
      },
    ],
  },
  {
    hashId: "RJ101BR",
    sampleType: "Water",
    location: { lat: -22.761, lng: -43.404 },
    CollectionDate: "2022-05-27",
    creditId: "15",
    depth: "20m",
    DNA_Concentration: 6.753,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 12.5,
          Madureira: 28.78,
          Rosana: 72.33,
          Guadalupe: 88.05,
          "Bom Jardim": 30.51,
          Florença: 2.92,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 16.15,
          Madureira: 19.27,
          Rosana: 72.9,
          Guadalupe: 19.54,
          "Bom Jardim": 14.54,
          Florença: 80.08,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 20.29,
          Madureira: 77.11,
          Rosana: 88.11,
          Guadalupe: 18.18,
          "Bom Jardim": 56.03,
          Florença: 4.22,
        },
      },
    ],
  },
  {
    hashId: "RJ102BR",
    sampleType: "Soil",
    location: { lat: -22.926, lng: -42.715 },
    CollectionDate: "2021-09-14",
    creditId: "8",
    depth: "45m",
    DNA_Concentration: 3.125,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 31.46,
          Madureira: 64.21,
          Rosana: 67.94,
          Guadalupe: 10.1,
          "Bom Jardim": 87.12,
          Florença: 28.78,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 85.92,
          Madureira: 84.24,
          Rosana: 96.06,
          Guadalupe: 77.65,
          "Bom Jardim": 51.11,
          Florença: 84.46,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 90.54,
          Madureira: 94.82,
          Rosana: 30.41,
          Guadalupe: 36.49,
          "Bom Jardim": 57.1,
          Florença: 66.55,
        },
      },
    ],
  },
  {
    hashId: "RJ103BR",
    sampleType: "Water",
    location: { lat: -22.899, lng: -43.207 },
    CollectionDate: "2021-12-19",
    creditId: "22",
    depth: "12m",
    DNA_Concentration: 7.881,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 52.7,
          Madureira: 55.51,
          Rosana: 96.02,
          Guadalupe: 84.13,
          "Bom Jardim": 82.33,
          Florença: 69.01,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 69.23,
          Madureira: 6.54,
          Rosana: 39.29,
          Guadalupe: 59.04,
          "Bom Jardim": 58.09,
          Florença: 91.01,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 37.52,
          Madureira: 30.22,
          Rosana: 43.85,
          Guadalupe: 65.78,
          "Bom Jardim": 41.42,
          Florença: 32.55,
        },
      },
    ],
  },
  {
    hashId: "RJ104BR",
    sampleType: "Soil",
    location: { lat: -22.979, lng: -43.227 },
    CollectionDate: "2023-01-21",
    creditId: "13",
    depth: "25m",
    DNA_Concentration: 5.441,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 20.25,
          Madureira: 36.43,
          Rosana: 36.3,
          Guadalupe: 23.51,
          "Bom Jardim": 72.93,
          Florença: 31.07,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 94.01,
          Madureira: 86.82,
          Rosana: 49.32,
          Guadalupe: 80.59,
          "Bom Jardim": 20.58,
          Florença: 23.25,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 3.39,
          Madureira: 44.31,
          Rosana: 16.82,
          Guadalupe: 45.08,
          "Bom Jardim": 70.94,
          Florença: 66.83,
        },
      },
    ],
  },
  {
    hashId: "RJ105BR",
    sampleType: "Water",
    location: { lat: -22.832, lng: -42.995 },
    CollectionDate: "2022-11-10",
    creditId: "9",
    depth: "30m",
    DNA_Concentration: 4.999,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 60.12,
          Madureira: 3.9,
          Rosana: 6.12,
          Guadalupe: 5.58,
          "Bom Jardim": 64.12,
          Florença: 14.13,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 15.05,
          Madureira: 98.96,
          Rosana: 25.72,
          Guadalupe: 56.97,
          "Bom Jardim": 99.45,
          Florença: 96.12,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 84.79,
          Madureira: 76.83,
          Rosana: 40.77,
          Guadalupe: 55.85,
          "Bom Jardim": 94.42,
          Florença: 29.16,
        },
      },
    ],
  },
  {
    hashId: "RJ106BR",
    sampleType: "Soil",
    location: { lat: -22.748, lng: -43.416 },
    CollectionDate: "2021-06-18",
    creditId: "19",
    depth: "50m",
    DNA_Concentration: 3.945,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 72.38,
          Madureira: 14.8,
          Rosana: 42.14,
          Guadalupe: 98.25,
          "Bom Jardim": 88.73,
          Florença: 79.43,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 18.99,
          Madureira: 90.7,
          Rosana: 31.02,
          Guadalupe: 3.78,
          "Bom Jardim": 31.97,
          Florença: 44.01,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 8.6,
          Madureira: 82.91,
          Rosana: 83.72,
          Guadalupe: 15.83,
          "Bom Jardim": 28.47,
          Florença: 15.54,
        },
      },
    ],
  },
  {
    hashId: "RJ107BR",
    sampleType: "Water",
    location: { lat: -22.838, lng: -43.246 },
    CollectionDate: "2022-02-07",
    creditId: "10",
    depth: "18m",
    DNA_Concentration: 6.431,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 5.97,
          Madureira: 81.78,
          Rosana: 84.82,
          Guadalupe: 92.59,
          "Bom Jardim": 37.06,
          Florença: 57.82,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 97.66,
          Madureira: 99.97,
          Rosana: 13.75,
          Guadalupe: 70.24,
          "Bom Jardim": 15.49,
          Florença: 3.13,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 97.61,
          Madureira: 1.52,
          Rosana: 79.73,
          Guadalupe: 47.23,
          "Bom Jardim": 41.46,
          Florença: 83.9,
        },
      },
    ],
  },
  {
    hashId: "RJ108BR",
    sampleType: "Soil",
    location: { lat: -22.988, lng: -43.178 },
    CollectionDate: "2023-08-03",
    creditId: "6",
    depth: "40m",
    DNA_Concentration: 5.667,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 6.48,
          Madureira: 57.88,
          Rosana: 38.02,
          Guadalupe: 62.98,
          "Bom Jardim": 86.65,
          Florença: 90.13,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 50.08,
          Madureira: 95.54,
          Rosana: 47.57,
          Guadalupe: 64.82,
          "Bom Jardim": 58.71,
          Florença: 43.83,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 60.75,
          Madureira: 28.04,
          Rosana: 89.91,
          Guadalupe: 11.44,
          "Bom Jardim": 59.22,
          Florença: 73.89,
        },
      },
    ],
  },
  {
    hashId: "RJ109BR",
    sampleType: "Water",
    location: { lat: -22.765, lng: -43.155 },
    CollectionDate: "2021-05-14",
    creditId: "18",
    depth: "15m",
    DNA_Concentration: 7.012,
    Sample_Markers: [
      {
        Name: "12S",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-12S",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "3a17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "k02dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6176",
        SHA256_fastaASV:
          "4adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f6",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 20.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 22.28,
          Madureira: 86.49,
          Rosana: 89.69,
          Guadalupe: 41.94,
          "Bom Jardim": 5.47,
          Florença: 30.49,
        },
      },
      {
        Name: "COI",
        FASTQ_ID_Sequence_Provider: "19281XD-19-60-COI",
        URL_FASTQ_Forward: "https://url-fastq-forward6.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse6.com",
        SHA256_Forward:
          "4b17847dcf10d74710f6d4b25dca31ef9352223b9dd2890c838390217d08d133",
        SHA256_Reverse:
          "l12dd6d21fcd7913489103795b58ffccc0306128f2b3b8e7775e5d3bb4f6177",
        SHA256_fastaASV:
          "2adc59f04398cc970e4ad0609336d7b0a58b949e2880ec060af99cc912a449f7",
        URL_fastaASV: "https://url-fastaASV6.com",
        qPCR_nM: 220.123,
        Pipeline_Log: "https://url-pipeline-log6.com",
        DAPC: {
          Pirajá: 28.57,
          Madureira: 50.79,
          Rosana: 31.36,
          Guadalupe: 56.29,
          "Bom Jardim": 24.86,
          Florença: 56.11,
        },
      },
      {
        Name: "16S",
        FASTQ_ID_Sequence_Provider: "19281XD-16-60-16S-4",
        URL_FASTQ_Forward: "https://url-fastq-forward9.com",
        URL_FASTQ_Reverse: "https://url-fastq-reverse9.com",
        SHA256_Forward:
          "j1k2l3m4n5o67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_Reverse:
          "k1l2m3n4o5p67890abcdef1234567890abcdef1234567890abcdef1234567894",
        SHA256_fastaASV:
          "l1m2n3o4p5q67890abcdef1234567890abcdef1234567890abcdef1234567894",
        URL_fastaASV: "https://url-fastaASV9.com",
        qPCR_nM: 70.0,
        Pipeline_Log: "https://url-pipeline-log9.com",
        DAPC: {
          Pirajá: 61.43,
          Madureira: 12.55,
          Rosana: 73.3,
          Guadalupe: 13.06,
          "Bom Jardim": 79.27,
          Florença: 86.45,
        },
      },
    ],
  },
];

export default Samples;
