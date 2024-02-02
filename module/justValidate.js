const justValidate = new JustValidate(".modal");
justValidate
  .addField(".modal__name", [
    {
      rule: "required",
      errorMessage: "Укажите Ваше имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Не короче 2 символов",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Слишком длинное имя",
    },
  ])
  .addField(".modal__tel", [
    {
      rule: "required",
      errorMessage: "Укажите Ваш телефон",
    },
  ]);
