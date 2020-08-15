# Angular8Farmhouser   http://top-hr.fun:8888/

该项目是在Angular2-Basic-Website的基础上开发的。
由于Angular2-Basic-Website是用的Angular2，所以需要将代码移植到angular8,方法如下：

step1: 用angular8执行ng new Angular8Farmhouser
step2: 将Angular2-Basic-Website\src覆盖掉Angular8Farmhouser\src
step3: 运行npm start即可，如有未安装的package，使用命令npm install XX即可

发布：
ng build --prod --output-path docs --base-href  angular8Farmhouser


ng  build --prod --base-href "https://grb2015.github.io/angular8Farmhouser/"


git remote add origin https://github.com/grb2015/angular8officalWeb.git
