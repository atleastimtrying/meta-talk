var chart = AmCharts.makeChart("topics_chart", {
    "type": "pie",
	"theme": "none",
    "dataProvider": [
      {"topic": "Mental Health"    , "talks":    1},
      {"topic": "Meta"             , "talks":    1},
      {"topic": "Socials"          , "talks":    3},
      {"topic": "Other Languages"  , "talks":    5},
      {"topic": "Server side"      , "talks":    5},
      {"topic": "UX"               , "talks":    7},
      {"topic": "CSS"              , "talks":    8},
      {"topic": "Projects"         , "talks":   11},
      {"topic": "JS"               , "talks":   22}
    ],
    "valueField": "talks",
    "titleField": "topic"
});
