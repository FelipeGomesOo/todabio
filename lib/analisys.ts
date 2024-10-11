const analisysList: Analisys[] = [
  {
    id: "analisys-01",
    name: "Gamma diversity analysis of samples from the three reservoirs (COI)",
    description:
      "Análise de diversidade gamma das amostras dos 3 reservatórios (COI)",
    Samples_Names: [
      "TZ425AQ_6u7d3js0rxfx_2021-10-20T11-55-00_water",
      "TZ486AQ_6gfrmmvp82xy_2022-12-13T18-30_water",
      "TZ487AQ_6gfrmmvp82xy_2022-12-13T18-35_water",
    ],

    DAPC_SVG_compoplot_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP100/DAPC_results/dapc-compoplot-predefined.svg",
    SHA256_DAPC_compoplot:
      "74c4d5f81cbbd163b7b7dd899b93e090de5755ffc4f28f9d5cf52324fc84a0e6",

    DAPC_CSV_compoplot_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP100/DAPC_results/dapc-probabilities-predefined.csv",
    SHA256_DAPC_CSV_compoplot:
      "a59a3fd5dd398f724ed73fa559b3dc20c6c8d49486e3c114b1b394ef1f4f922e",

    DAPC_SVG_scatterplot_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP100/DAPC_results/dapc-scatterplot-predefined.svg",
    SHA256_DAPC_scatterplot:
      "204528e690472fb486fe27dfa0a1d9afef253d368096d0f7e7f1c7a8ab94530e",

    DAPC_CSV_scatterplot_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP100/DAPC_results/dapc-ind-coords-predefined.csv",
    SHA256_DAPC_CSV_scatterplot:
      "6b53ad8927683f574b8bbe7268b62c6cc60c71d7b03b5dc35ec8f20ec2795c10",

    PCoA_SVG_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP100/PCoA_results/pcoa-plot.svg",
    SHA256_PCoA_SVG:
      "7b2cbf0324639c2a8249ead92b8394dae82b5e6c83af1216b16c693b4217cb09",

    PCoA_CSV_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP100/PCoA_results/pcoa-ind-coord.csv",
    SHA256_PCoA_CSV:
      "af1209e327ebecc6266e1f6ee83d5498b6ecb1a1001223ee90957b492f6ad822",

    FASTA_OTU_URL: "NA",
    SHA256_FASTA_OTU: "NA",

    Pipeline_02_Version: "v1",
    DB_Version: "v1",
    Marker: "16s",
  },
  {
    id: "analisys-02",
    name: "Acre 2023-2024",
    description: "Water Sample Biodiversity Analysis",
    Samples_Names: [
      "TZ425AQ_6u7d3js0rxfx_2021-10-20T11-55-00_water",
      "TZ486AQ_6gfrmmvp82xy_2022-12-13T18-30_water",
      "TZ487AQ_6gfrmmvp82xy_2022-12-13T18-35_water",
      "TZ497AQ_7a7d3js0rxfx_2021-10-20T11-55-00_water",
      "TZ901AQ_5cfrmmvp82xy_2022-12-13T18-30_water",
    ],

    PCA_SVG_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP999/PCA_results/PCA-plot.svg",
    SHA256_PCA_SVG:
      "ced432e708c9b7fb908e10d37b190826328e472b5f8cfafa6cae6dd017414f7e",

    PCA_CSV_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP999/PCA_results/pca-ind-coord.csv",
    SHA256_PCA_CSV:
      "50d7a82bc4b82c76b6a03b0eac338ba14fc282a1e9ae628fcb4c838c60a37657",

    PCoA_SVG_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP999/PCoA_results/pcoa-plot.svg",
    SHA256_PCoA_SVG:
      "7b2cbf0324639c2a8249ead92b8394dae82b5e6c83af1216b16c693b4217cb09",

    PCoA_CSV_URL:
      "https://s3.amazonaws.com/toda.bio/toy_data/EXP999/PCoA_results/pcoa-ind-coord.csv",
    SHA256_PCoA_CSV:
      "af1209e327ebecc6266e1f6ee83d5498b6ecb1a1001223ee90957b492f6ad822",

    FASTA_OTU_URL: "NA",
    SHA256_FASTA_OTU: "NA",

    DB_Version: "v1",
    Pipeline_Version: "v1",
    Marker: "12s",
  },
];
export default analisysList;
