В папке imports/samovar с роутами и тд. как в облаке

в папке imports/samovar/pages лежит отдельно папка content просто данные - названия соответствуют стэйтам. которые я импорчу на двух страницах Main и Dashboard 
```
Стэйты Main
    messagesArray: messagesArray,
    accountInfo: accountInfo,
    swipeSteps: swipeSteps,
    projectContent: projectContent,
    
Стэйты Dashboard
    projectContent: projectContent, --- Контент проекта
    leaderboardContent: leaderboardContent, --- для Лидерборда
    graphContent: graphContent, --- для Графика я так понимаю одинаковые могут быть с Лидербордом, но пока не уверен поэтому отдельно
    messagesArray: messagesArray, --- оповещения в тулбаре
    accountInfo: accountInfo, --- инфа пользователя
    accountRole: accountInfo.accountRole,  --- на основе значения либо разработчик {2} либо {0,1} - заказчик или админ (костыль конечно)
    projectData: projectData, --- Данные проекта
```


На самом деле пока можно подзабить на Main - Дэша уже выше крыши
    
    
