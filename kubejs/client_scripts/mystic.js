const $GuiGraphics = Java.loadClass("net.minecraft.client.gui.GuiGraphics")
const $ClimateRenderCache = Java.loadClass("net.dries007.tfc.client.ClimateRenderCache")
const $Calendars = Java.loadClass("net.dries007.tfc.util.calendar.Calendars")
const $Month = Java.loadClass("net.dries007.tfc.util.calendar.Month")
const $ClimateClassification = Java.loadClass("net.dries007.tfc.util.climate.KoppenClimateClassification")
const $RenderGuiEvent = Java.loadClass("net.minecraftforge.client.event.RenderGuiEvent$Pre")

NativeEvents.onEvent($RenderGuiEvent, event => {
    global.renderGuiEvent(event)

})

global.renderGuiEvent = function (event) {
    let guiGraphics = event.getGuiGraphics()
    let poseStack = guiGraphics.pose()
    // let window = Client.getWindow()

    let climateCache = $ClimateRenderCache.INSTANCE
    let calendarsClient = $Calendars.CLIENT

    let rainFall = climateCache.getRainfall()
    let avgTemp = climateCache.getAverageTemperature()
    let currentTemp = climateCache.getTemperature()

    let climateEnum = $ClimateClassification.classify(avgTemp, rainFall)
    let climateText = ("tfc.enum." + climateEnum.getDeclaringClass().getSimpleName() + "." + climateEnum.name()).toLowerCase()

    poseStack.pushPose()
    {
        poseStack.translate(22, 28, 0)
        poseStack.pushPose()
        {
            poseStack.translate(-15, -10, 0)
            guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                Client.font,
                Text.translate("ui.kubejs.marker").getString(),
                0, 0,
                getColorWithRGBA(128, 255, 255, 100),
                false
            )
            // 开关信息显示
            if (true) {
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.calendar_date", calendarsClient.getCalendarTimeAndDate().getString()).getString(),
                    0, 12,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("ui.kubejs.current_dimension", Client.player.level.dimension.location().getPath()).getString(),
                    0, 24,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.climate_koppen_climate_classification", Text.translatable(climateText)).getString(),
                    0, 36,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.climate_annual_rainfall", rainFall.toFixed(1)).getString(),
                    4, 48,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.climate_average_temperature", avgTemp.toFixed(1)).getString(),
                    4, 60,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.climate_current_temp", currentTemp.toFixed(1)).getString(),
                    4, 72,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
            }

        }
        poseStack.popPose()

    }
    poseStack.popPose()
}

let $Color = Java.loadClass('java.awt.Color')
/**
 * @param {number} R 
 * @param {number} G 
 * @param {number} B 
 * @param {number} A 
 * @returns {number}
 */
function getColorWithRGBA(R, G, B, A) {
    return new $Color(R / 255, G / 255, B / 255, A / 100).getRGB()
}


