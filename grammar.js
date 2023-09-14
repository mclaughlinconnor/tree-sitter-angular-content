module.exports = grammar({
  name: "angular_content",
  externals: ($) => [$._interpolation_content, $.text],
  rules: {
    content: ($) => repeat(choice($.interpolation, alias($.text, "text"))),

    interpolation: ($) => seq("{{", $._interpolation_content, "}}"),
  },
});
