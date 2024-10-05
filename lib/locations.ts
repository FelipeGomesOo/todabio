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
        DAPC: { Acre: 60, Jupiá: 30, Rosana: 10 },
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
        DAPC: { Acre: 15, Jupiá: 20, Rosana: 65 },
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
        DAPC: { Acre: 20, Jupiá: 50, Rosana: 30 },
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
        DAPC: { Acre: 55, Jupiá: 35, Rosana: 10 },
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
        DAPC: { Acre: 25, Jupiá: 20, Rosana: 55 },
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
        DAPC: { Acre: 40, Jupiá: 30, Rosana: 30 },
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
        DAPC: { Acre: 45, Jupiá: 40, Rosana: 15 },
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
        DAPC: { Acre: 30, Jupiá: 25, Rosana: 45 },
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
        DAPC: { Acre: 10, Jupiá: 60, Rosana: 30 },
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
        DAPC: { Acre: 35, Jupiá: 45, Rosana: 20 },
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
        DAPC: { Acre: 20, Jupiá: 35, Rosana: 45 },
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
        DAPC: { Acre: 30, Jupiá: 40, Rosana: 30 },
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
        DAPC: { Acre: 40, Jupiá: 50, Rosana: 10 },
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
        DAPC: { Acre: 30, Jupiá: 25, Rosana: 45 },
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
        DAPC: { Acre: 50, Jupiá: 25, Rosana: 25 },
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
        DAPC: { Acre: 70, Jupiá: 20, Rosana: 10 },
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
        DAPC: { Acre: 20, Jupiá: 30, Rosana: 50 },
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
        DAPC: { Acre: 40, Jupiá: 40, Rosana: 20 },
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
        DAPC: { Acre: 50, Jupiá: 30, Rosana: 20 },
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
        DAPC: { Acre: 25, Jupiá: 25, Rosana: 50 },
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
        DAPC: { Acre: 35, Jupiá: 45, Rosana: 20 },
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
        DAPC: { Acre: 10, Jupiá: 60, Rosana: 30 },
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
        DAPC: { Acre: 20, Jupiá: 40, Rosana: 40 },
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
        DAPC: { Acre: 30, Jupiá: 50, Rosana: 20 },
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
        DAPC: { Acre: 30, Jupiá: 40, Rosana: 30 },
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
        DAPC: { Acre: 25, Jupiá: 25, Rosana: 50 },
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
        DAPC: { Acre: 45, Jupiá: 30, Rosana: 25 },
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
        DAPC: { Acre: 40, Jupiá: 30, Rosana: 30 },
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
        DAPC: { Acre: 30, Jupiá: 50, Rosana: 20 },
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
        DAPC: { Acre: 50, Jupiá: 20, Rosana: 30 },
      },
    ],
  },
];

export default Samples;
