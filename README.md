В папке imports/samovar с роутами и тд. как в облаке

в папке imports/samovar/pages лежит отдельно папка content просто данные которые я импорчу на двух страницах Main и Dashboard. 
```
Стэйты Main
    messagesArray: messagesArray,
    accountInfo: accountInfo,
    swipeSteps: swipeSteps,
    projectContent: projectContent,
    
Стэйты Dashboard
    projectContent: projectContent, --- Контент проекта
    leaderboardContent: leaderboardContent, --- Лидерборд
    graphContent: graphContent, --- График
    messagesArray: messagesArray, --- оповещения в тулбаре
    accountInfo: accountInfo, --- инфа пользователя
    accountRole: accountInfo.accountRole,  
    projectData: projectData, --- Данные проекта
```


На самом деле пока можно подзабить на Main - Дэша уже выше крыши
    
    
