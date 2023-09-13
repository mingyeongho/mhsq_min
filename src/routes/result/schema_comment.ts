type ScoreMap = { [key: string]: string };
const r: { [key: string]: ScoreMap } = {
    "단절 및 거절": {
        "정서적 결핍": "정서적 결핍 스키마를 가지고 있습니다. 당신은 자신을 진심으로 사랑하거나 공감해줄 수 있는 사람은 없을 거라 예상합니다. 사람들 사이에서 마음을 닫아버리고, 관계에 대한 기대를 하지 않게 됩니다.일종의 '마음의 벽’이 두껍게 생겨나게 됩니다.어차피 깊어질 수 없는 바에야, 사람들과의 관계를 소모적이라 생각해 피하기도 합니다.",
        '유기불안정': "유기/불안정 스키마를 가지고 있습니다. 당신은 인간관계에서 버림받는 것에 대한 두려움이 큽니다. 누군가가 나를 떠날 것 같은 낌새만 보여도 불안해지고, 급기야 매달리기도 합니다.지금의 관계가 언젠가는 다 깨지고 자신은 외톨이가 될 것 같아 무섭습니다.상처받지 않기 위해 관계 자체를 피하거나, 정반대로 버림받기 전에 자신이 먼저 이별을 선수 치는 경우도 생깁니다.",
        "불신/ 학대": "불신/학대 스키마를 가지고 있습니다. 당신은 타인에 대한 불신이 강합니다.항상 사람들의 숨은 의도를 의심하고, 사람들이 접근하는 데는 꿍꿍이가 있다고 예상합니다.인간관계에서 늘 손해 보지 않으려 하고, 사람들의 호의를 경계하곤 합니다.선의로 다가오는 사람들과도 관계를 잘 맺지 못하고, 관계를 맺은 상대방도 불편해져 인간관계가 오래 유지되지 못합니다.이러한 이유로 사람들과 얽히는 것을 피하려는 경향이 강합니다.",
        "사회적고립 / 소외": "사회적 고립/소외 스키마를 가지고 있습니다. 당신은 스스로를 ‘섞이지 못하는 사람’ 이라 여깁니다.사람들과 함께 있는 것이 어딘가 불편하고, 자신에게는 남들과 다른 결정적인 차이가 존재한다고 생각합니다.이런 생각은 직장, 학교 내에서 아웃사이더 역할을 자처하게 하고, 결국 의미 있는 인간관계가 만들어지지 못합니다.",
        "결함 / 수치심": "결함/수치심 스키마를 가지고 있습니다. 당신은 늘 스스로를 ‘모자란 사람’이라 생각합니다. 자신에게는 극복할 수 없는 큰 결점이 있다 여기고, 항상 남들과 비교하며 열등감을 느낍니다.자신을 드러내는 일이 두려워 늘 뒤에 숨으려고만 하고, 사람들을 만나는 것도 항상 자신이 없습니다.극단적인 경우는, 자신의 결함을 감추고자 상대의 결함을 집요하게 찾아내어 지적하는 식으로 발달하기도 합니다.",
    },
    "손상된 자율성 및 손상된 수행": {
        "실패": "실패 스키마를 가지고 있습니다.당신은 매사 자신이 이미 실패했거나, 결국 실패할 것이라고 예상합니다. 또, 자신이 이룬성취를 평가절하하는 경우가 있지는 않은지 살펴볼 필요가 있습니다. 실패의 덫에 걸려 있다면, 새로운일에 도전하는 것을 피하고만 싶어집니다. 혹은, 정반대로 타인의 성취를 무시하고 깔아뭉갬으로써자신의 실패감을 보상하려 합니다.",
        "의존 / 무능": "의존/무능 스키마를 가지고 있습니다.당신은 혼자 힘으로 해내는 것이 어렵습니다. 늘 누군가의 도움이 필요하고, 주변사람들에게 손을 내밉니다. 혼자 해야 하는 일에는 무기력감만 느낍니다. 매사 결정을 미루거나, 선택을회피하는 모습을 보이기도 합니다. 하지만 종종 정작 도움이 필요한 상황에서는 타인에게 전혀 의존하지 않으려하고, 결국 실패하여, 스스로를 다른 사람에게 도움을 받지 않으면 실패하는 사람으로 만들어 버립니다.",
        "취약성": "취약성 스키마를 가지고 있습니다.당신은 일어나지 않은 일에 대한 염려가 강하고, 이를 반복적으로 확인하려 듭니다. 자신은도저히 그 일을 감당하지 못해, 끔찍한 결말이 날 것이라 예상하고 불안해합니다. 불확실한 상황을회피하려는 경향이 강하지만, 정반대로 취약성을 극복하기 위해 무모한 행동을 일삼는 식으로스키마가 발달하기도 합니다. 공황장애 환자들에게 잘 나타나는 스키마입니다.",
        "융합 / 미발달된 자기": "융합/미발달된 자기 스키마를 가지고 있습니다.당신에게 온전한 ‘나’는 없습니다. 중요한 타인(대개 부모)과 정서적으로지나치게 밀접하게 연결되어 있고, 자신의 정체성은 희미하기만 합니다. 만약 개인의 정체성을드러내야 하는 활동이 있다면, 극단적으로 피하려는 경향이 있습니다. 융합/미발달된 자기의 스키마를덮기 위한 반대 극단으로, 그 누구와도 얽히지 않으려 하는 강박적인 독립을 추구하는 경우도 있습니다.",
    },
    "타인 - 중심성": {
        "복종": "복종 스키마를 가지고 있습니다.당신은 항상 상대의 의견을 따라갑니다. 자신의 의견이나 감정은 그리 중요하지 않거나, 억지로누르곤 합니다. 자신을 내세우면 피해를 입을까 두려워 합니다. 자신도 모르게 주변에는 의견이 강하고,명령조의 사람들만 모여 있는 경우가 많습니다. 모든 관계를 회피하거나, 자신의 욕구마저도외면합니다. 어떤 경우에는, 미묘하게 반항적으로 행동하여 복종에 따른 불편함을 덮으려는 방향으로스키마가 발달하기도 합니다.",
        "자기희생": "자기희생 스키마를 가지고 있습니다.당신에게 자신의 만족은 뒷전입니다. 당신은 타인의 행복, 즐거움, 만족이 더 중요해보입니다. 자신의 욕구를 먼저 충족하게 되는 경우에는 죄책감마저 느끼지만, 그 밑에는 언제나충족되지 않은 욕구가 도사리고 있습니다. 보상받지 못한 과도한 자기희생은, 고마워하지 않는 상대에대한 극단적 분노나 원망으로 이어지기도 합니다.",
        "승인추구 / 인정추구": "승인추구/인정추구 스키마를 가지고 있습니다.당신은 타인의 인정과 찬사가 세상 무엇보다 중요합니다. 타인의 인정을 받을때는 만족하지만, 타인의 관심을 가지지 않거나 평가 절하를 당하게 되면 극도로 좌절하거나 분노를느낍니다. 자신의 자존감은 전적으로 타인의 한 마디에 달려있기도 합니다. 이런 경우 타인의 평가를받는 자리를 극단적으로 피하려고 시도하거나, 더욱 왜곡된 경우 ‘막 나가는’ 행동으로 인정의 굴레에서벗어나려는 그릇된 행동도 나타납니다.",
    },
    "과잉 경계 및 억제": {
        "정서적 억제": "정서적 억제 스키마를 가지고 있습니다.당신은 감정보다는 이성과 질서를 중요시합니다. 감정적으로는 너무 메말라 보이며,극단적인 경우 자신의 내면이 어떠한지에 대한 느낌도 갖지 못합니다. 대개 긍정적인 충동(기쁨, 애정,사랑 등)을 표현하는 것이 힘들며, 자신의 약점을 드러내는 것을 두려워합니다. 깊은 내면에서는자신에 대한 수치심, 인정받지 못할지도 모른다는 두려움이 도사리고 있습니다. 극단적으로 술에 취해폭발적으로 감정을 발산하는 경우도 생깁니다.",
        "엄격한기준 / 과잉비판": "엄격한 기준/과잉비판 스키마를 가지고 있습니다. 당신의 기준은 뚜렷하고 확고지만, 그 기준이 너무 높은 경우가 많습니다.타인과 자신에 대해 엄격하고, 과도한 기준으로 인간관계가 어려워집니다. 완벽주의 성향을 보이고,일에 있어서는 주변의 인정을 받지만, 정작 자신은 에너지가 소진되어 지치기도 합니다. 이를 덮고자하는 무의식적 의도로, 수준 이하의 쉬운 일만 하려는 반대 극단의 방향으로 스키마가 발달하기도합니다.",
        "부정성 / 비관주의": "부정성/비판주의 스키마를 가지고 있습니다.당신은 삶의 부정적인 측면(고통, 죽음, 상실, 손해, 손실 등)만 바라보는 경향이강합니다. 세상의 모든 일이 결국은 좋지 않게 끝나거나, 잘못될 것이라 예상하기 때문에 지나치게조심하고 경계하거나, 혹은 자주 불평합니다. 매사 큰 기대를 하지 않고, 불평하며 기대 수준을 낮게유지하려 합니다.",
        "처벌": "처벌 스키마를 가지고 있습니다.당신은 누구나 실수하게 되면 가혹한 처벌을 받아야 한다고 믿습니다. 자신이 가진 완고하고고집스러운 기준에 미치지 못하는 사람들을 참지 못합니다. 타인의 허점이나 실수를 너그럽게용납하지 못하고, 상대에 대한 공감을 거부합니다. 이는 자기 자신에게도 예외는 아닙니다. 일정 기준을충족하지 못하게 될까 두려워 업무를 회피하기도 합니다. 가끔 상대에게 관대한 모습을 보이려 해도,내부에는 처벌에 대한 욕구와 분노가 도사리고 있습니다.",
    },
    "손상된 한계": {
        "특권의식 / 웅대성": "특권의식/웅대성 스키마를 가지고 있습니다.당신은 자신이 남들보다 우월하며, 그렇기 때문에 다른 사람들보다 더 많은권리를 누릴 자격이 있다고 생각합니다. 사회의 규범보다는 자신의 욕구를 더 우선시하는 경향도보입니다. 그래서 주변 사람들에게 ‘이기적이다’는 말을 종종 듣기도 합니다. 자신이 우월해질 수 없는상황을 회피하며, ‘용 꼬리보다 뱀 머리’를 추구합니다. 가끔 자신의 이기적 행동을 보상하기 위해과도한 기부나 선행을 행하기도 하지만, 이 또한 썩 정의로운 의도는 아닐 수 있습니다.",
        "부족한자기통제 / 훈련": "부족한 자기통제/자기훈련 스키마를 가지고 있습니다.당신은 참고 견디는 힘이 부족해 보입니다. 지루함을 참지 못하고충동적으로 행동하고, 지금 당장, 이 순간에 원하는 것을 얻으려 합니다. 장기적인 계획보다는 단기적인계획과 그에 따르는 당장의 달콤함에 치중하는 경향도 있습니다. 인내심을 발휘하는 데서 발생하는불편함을 끔찍하게 여깁니다. 참고 견뎌야 하는 상황을 가능한 한 피하려 하고, 이 때문에 타인들과 잘섞이기 힘들어지기도 합니다.",
    }
}


export const createComment = (scores: { category: string, name: string; sum: number; answers: number[][]; }[]): string[] => {
    const comment: string[] = []
    scores.forEach((score) => {
        const category = score.category;
        const name = score.name;
        comment.push(r[category][name]);
    })
    return comment;
}