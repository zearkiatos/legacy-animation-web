if [ $(echo "$NODE_ENV")=="develop" ]
then
    npm run docker:dev
else
    npm run start
fi

echo "`date`: 🤖 All ready boss!"