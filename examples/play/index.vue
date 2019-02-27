<template>
  <div style="margin: 20px; width: 1000px;">
    <router-link :to="{ name: 'temp'}">
      <h1>temp</h1>
    </router-link>
    <tree
    :fixedFirst="true"
    :data="dataArr"
    :highlight-current-row="false"
    height="300"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column v-for="n in 30" label="123" :key="n">
      <template slot-scope="{ row }">
        111
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
    fixed="right"
      prop="address"
      label="Address">
    </el-table-column>
  </tree>
  ;)
  </div>
</template>

<script>

const dt = [
  {
    "plan": 16700,
    "name": "ХГРП",
    "id": 167,
    "days": [],
    "sites": [
        {
            "id": 5,
            "name": "Болотистый",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 6,
                    "name": "Станок №26",
                    "days": []
                },
                {
                    "id": 48,
                    "name": "Станок №25",
                    "days": []
                }
            ]
        },
        {
            "id": 7,
            "name": "Хоторчан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 60,
                    "name": "CS-14 (бригада №7)",
                    "days": []
                }
            ]
        },
        {
            "id": 8,
            "name": "Кундуми",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 49,
                    "name": "Станок №11",
                    "days": []
                },
                {
                    "id": 50,
                    "name": "Станок №12",
                    "days": []
                }
            ]
        },
        {
            "id": 9,
            "name": "Нежданинское ",
            "plan": 3800,
            "days": [],
            "rigs": [
                {
                    "id": 53,
                    "name": "Станок №20",
                    "days": []
                },
                {
                    "id": 54,
                    "name": "Станок №16",
                    "days": []
                },
                {
                    "id": 55,
                    "name": "Станок №18",
                    "days": []
                }
            ]
        },
        {
            "id": 10,
            "name": "Прогноз",
            "plan": 4700,
            "days": [],
            "rigs": [
                {
                    "id": 17,
                    "name": "CS-14 (бригада №15)",
                    "days": []
                },
                {
                    "id": 18,
                    "name": "СS-14 (бригада №19)",
                    "days": []
                },
                {
                    "id": 56,
                    "name": "CS-14 (бригада №24)",
                    "days": []
                }
            ]
        },
        {
            "id": 12,
            "name": "Кутын",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 51,
                    "name": "Станок №6",
                    "days": []
                },
                {
                    "id": 52,
                    "name": "Станок №23",
                    "days": []
                }
            ]
        },
        {
            "id": 15,
            "name": "Албазино (подземка)",
            "plan": 1400,
            "days": [],
            "rigs": [
                {
                    "id": 4,
                    "name": "Станок №9",
                    "days": []
                },
                {
                    "id": 8,
                    "name": "Станок №17",
                    "days": []
                }
            ]
        },
        {
            "id": 16,
            "name": "Албазино (поверхность)",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 5,
                    "name": "Станок №4",
                    "days": []
                },
                {
                    "id": 7,
                    "name": "Станок №1",
                    "days": []
                }
            ]
        },
        {
            "id": 17,
            "name": "Светлое",
            "plan": 1800,
            "days": [],
            "rigs": [
                {
                    "id": 57,
                    "name": "CS-1000 P6 (бригада №2)",
                    "days": []
                },
                {
                    "id": 58,
                    "name": "CS-14 (бригада №13)",
                    "days": []
                },
                {
                    "id": 59,
                    "name": "C-5 (бригада №14)",
                    "days": []
                }
            ]
        },
        {
            "id": 39,
            "name": "Финиш",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 9,
                    "name": "демостанок",
                    "days": []
                }
            ]
        },
        {
            "id": 40,
            "name": "Левобережный",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 9,
                    "name": "демостанок",
                    "days": []
                }
            ]
        }
    ]
},
  
  {
    "plan": 19286,
    "name": "БГРП1",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП2",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП3",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП4",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП5",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП6",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП7",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП8",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП9",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП10",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
},
  {
    "plan": 19286,
    "name": "БГРП11",
    "id": 168,
    "days": [],
    "sites": [
        {
            "id": 6,
            "name": "Лунное",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 11,
            "name": "Кубака",
            "plan": 774,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                }
            ]
        },
        {
            "id": 13,
            "name": "Биркачан",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 11,
                    "name": "esd-5",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 14,
            "name": "Ольча",
            "plan": 595,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 18,
            "name": "Дукат",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                },
                {
                    "id": 23,
                    "name": "LM-75(2)",
                    "days": []
                }
            ]
        },
        {
            "id": 19,
            "name": "Дукат НКР",
            "plan": 667,
            "days": [],
            "rigs": [
                {
                    "id": 16,
                    "name": "НКР-100",
                    "days": []
                }
            ]
        },
        {
            "id": 20,
            "name": "Майское ЭРР",
            "plan": 1150,
            "days": [],
            "rigs": [
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                },
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                }
            ]
        },
        {
            "id": 21,
            "name": "Майское ГРР",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 24,
                    "name": "Diamec-U6",
                    "days": []
                },
                {
                    "id": 25,
                    "name": "DIamec - U8",
                    "days": []
                }
            ]
        },
        {
            "id": 22,
            "name": "Березитовый",
            "plan": 1900,
            "days": [],
            "rigs": [
                {
                    "id": 12,
                    "name": "D-262",
                    "days": []
                },
                {
                    "id": 13,
                    "name": "esd-9",
                    "days": []
                }
            ]
        },
        {
            "id": 23,
            "name": "Ирокинда",
            "plan": 3500,
            "days": [],
            "rigs": [
                {
                    "id": 38,
                    "name": "LM-75 бр. 28",
                    "days": []
                },
                {
                    "id": 39,
                    "name": "LM-75 бр. 7",
                    "days": []
                },
                {
                    "id": 40,
                    "name": "LM-75 бр.15",
                    "days": []
                }
            ]
        },
        {
            "id": 24,
            "name": "Зун-Холба",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 26,
                    "name": "LM75(23)",
                    "days": []
                },
                {
                    "id": 27,
                    "name": "LM-90",
                    "days": []
                },
                {
                    "id": 28,
                    "name": "dE-130(16)",
                    "days": []
                },
                {
                    "id": 29,
                    "name": "dE-130(22)",
                    "days": []
                },
                {
                    "id": 21,
                    "name": "Diamec-262",
                    "days": []
                }
            ]
        },
        {
            "id": 25,
            "name": "р-к Октябрьский",
            "plan": 2000,
            "days": [],
            "rigs": [
                {
                    "id": 33,
                    "name": "ESD-5(26)",
                    "days": []
                },
                {
                    "id": 34,
                    "name": "ESD-9(1)",
                    "days": []
                }
            ]
        },
        {
            "id": 26,
            "name": "р-к Таймырский",
            "plan": 1250,
            "days": [],
            "rigs": [
                {
                    "id": 35,
                    "name": "ESD-5(13)",
                    "days": []
                },
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                },
                {
                    "id": 37,
                    "name": "ESD-5(20)",
                    "days": []
                }
            ]
        },
        {
            "id": 27,
            "name": "р-к Комсомольский",
            "plan": 900,
            "days": [],
            "rigs": [
                {
                    "id": 30,
                    "name": "ESD-5(4)",
                    "days": []
                },
                {
                    "id": 31,
                    "name": "ESD-5(21)",
                    "days": []
                }
            ]
        },
        {
            "id": 28,
            "name": "р-к Маяк",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 32,
                    "name": "Diamec-262(10)",
                    "days": []
                }
            ]
        },
        {
            "id": 29,
            "name": "р-к Таймырский Геотехника",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 36,
                    "name": "ESD-9(29)",
                    "days": []
                }
            ]
        },
        {
            "id": 34,
            "name": "Владимирский",
            "plan": 300,
            "days": [],
            "rigs": [
                {
                    "id": 10,
                    "name": "LM-75",
                    "days": []
                }
            ]
        },
        {
            "id": 35,
            "name": "Жанок",
            "plan": 0,
            "days": [],
            "rigs": [
                {
                    "id": 41,
                    "name": "LM-75 бригада №3",
                    "days": []
                }
            ]
        },
        {
            "id": 36,
            "name": "Терем",
            "plan": null,
            "days": [],
            "rigs": [
                {
                    "id": 22,
                    "name": "LM-75(17)",
                    "days": []
                }
            ]
        },
        {
            "id": 37,
            "name": "Березитовый 2",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 61,
                    "name": "Sandvik dE-140",
                    "days": []
                }
            ]
        },
        {
            "id": 38,
            "name": "Майское поверхность",
            "plan": 1000,
            "days": [],
            "rigs": [
                {
                    "id": 62,
                    "name": "CS-1000",
                    "days": []
                }
            ]
        }
    ]
}

]
//import { RecycleScroller } from 'vue-virtual-scroller'
//import '../../src/directives/scroll'
import tree from './tree.vue'

const dataRow = {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. ',
          zip: 'CA 90036',
          tag: 'Home'
        }
export default {
  name: 'play',
  components: {
    tree
  },
  data: () => {

    return {
      dataArr: []
    }
  },
  methods: {
    getCols(row) {
      return Object.values(row)
    },
    getTable() {
      let table = dt.map( companyReport => Object.assign(companyReport, {
        type: 'company',
        children: companyReport.sites.map( site => Object.assign( site, {
          type: 'site',
          children: site.rigs.map( rig => Object.assign( rig, {
            type: 'rig',
          }))
        }))
      }) )
      let item = {name :'sos'}
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push(item)
      table.push({ name: 'last'})
      return table
    }
  },
  mounted() {
    setTimeout(() => this.dataArr = this.getTable(), 100)
  }
}
</script>
