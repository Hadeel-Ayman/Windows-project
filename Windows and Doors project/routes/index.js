const UserRoute = require('./UserRoute');
const AuthRoute = require('./AuthRoute');
const FrameRoute = require('./FrameRoute');
const SashRoute = require('./SashRoute');
const CompanyRoute = require('./CompanyRoute');
const MaterialRoute = require('./MaterialRoute');
const OpeningSystemRoute = require('./OpeningSystemRoute');
const ProfileRoute = require('./ProfileRoute');
const InvoiceRoute = require('./invoiceRoute');
const CuttingProcessRoute = require('./CuttingProcessRoute');
const WeldingProcessRoute = require('./WeldingProcessRoute');
const TypeOfUnitRoute = require('./TypeOfUnitRoute');
const SizeRoute = require('./SizeRoute');
const ReinforcementsteelRoute = require('./ReinforcementsteelRoute');
const FloatingMullionRoute = require('./FloatingMullion');
const GlazingBeadRoute = require('./GlazingBeadRoute');
const OpeningLayoutRoute = require('./OpeningLayoutRoute');
const MullionRoute = require('./MullionRoute');
const LayoutRoute = require('./LayoutRoute');
const GlassRoute = require('./GlassRoute');
const FanlightRoute = require('./FanlightRoute');
const GlassColorRoute = require('./GlassColorRoute');


const AllRoutes = (app) => {
    app.use('/api/v1/User', UserRoute);
    app.use('/api/v1/Auth', AuthRoute);
    app.use('/api/v1/Frame', FrameRoute);
    app.use('/api/v1/Sash', SashRoute);
    app.use('/api/v1/Company', CompanyRoute);
    app.use('/api/v1/Material', MaterialRoute);
    app.use('/api/v1/OpeningSystem', OpeningSystemRoute);
    app.use('/api/v1/Profile', ProfileRoute);
    app.use('/api/v1/TypeOfUnit', TypeOfUnitRoute);
    app.use('/api/v1/Invoice', InvoiceRoute);
    app.use('/api/v1/CuttingProcess', CuttingProcessRoute);
    app.use('/api/v1/WeldingProcess', WeldingProcessRoute);
    app.use('/api/v1/Size', SizeRoute);
    app.use('/api/v1/Reinforcementsteel', ReinforcementsteelRoute);
    app.use('/api/v1/FloatingMullion', FloatingMullionRoute);
    app.use('/api/v1/GlazingBead', GlazingBeadRoute);
    app.use('/api/v1/OpeningLayout', OpeningLayoutRoute);
    app.use('/api/v1/Mullion', MullionRoute);
    app.use('/api/v1/Layout', LayoutRoute);
    app.use('/api/v1/Glass', GlassRoute);
    app.use('/api/v1/Fanlight', FanlightRoute);
    app.use('/api/v1/GlassColor', GlassColorRoute);
}

module.exports = AllRoutes;