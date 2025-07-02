// Config Area: 

// Default: 22, 84 if you want the oxygen tanks not to overlap with the infos
const xPos = 22
// Default: 28
const yPos = 28
// Default: 0
const zPos = 0

const enableInfoDisplay = true

// Do not edit below this line | 不要编辑此行以下的内容
const $GuiGraphics = Java.loadClass("net.minecraft.client.gui.GuiGraphics")
const $ClimateRenderCache = Java.loadClass("net.dries007.tfc.client.ClimateRenderCache")
const $Calendars = Java.loadClass("net.dries007.tfc.util.calendar.Calendars")
const $Month = Java.loadClass("net.dries007.tfc.util.calendar.Month")
const $ClimateClassification = Java.loadClass("net.dries007.tfc.util.climate.KoppenClimateClassification")
const $RenderGuiEvent = Java.loadClass("net.minecraftforge.client.event.RenderGuiEvent$Pre")

let tickCount = 0
let cachedClimate = {
    rainFall: 0,
    avgTemp: 0,
    currentTemp: 0,
    climateEnum: null,
    climateText: ""
}
let cachedCalendarDate = null

NativeEvents.onEvent($RenderGuiEvent, event => {
    global.renderGuiEvent(event)
})

global.renderGuiEvent = function (event) {
    tickCount++
    if (tickCount % 20 == 0) {
        let climateCache = $ClimateRenderCache.INSTANCE
        let calendarsClient = $Calendars.get(true)

        cachedClimate.rainFall = climateCache.getRainfall()
        cachedClimate.avgTemp = climateCache.getAverageTemperature()
        cachedClimate.currentTemp = climateCache.getTemperature()

        cachedClimate.climateEnum = $ClimateClassification.classify(cachedClimate.avgTemp, cachedClimate.rainFall)
        cachedClimate.climateText = ("tfc.enum." + cachedClimate.climateEnum.getDeclaringClass().getSimpleName() + "." + cachedClimate.climateEnum.name()).toLowerCase()

        cachedCalendarDate = calendarsClient.getCalendarTimeAndDate().getString()
    }

    let guiGraphics = event.getGuiGraphics()
    let poseStack = guiGraphics.pose()

    poseStack.pushPose()
    {
        poseStack.translate(xPos, yPos, zPos)
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
            if (enableInfoDisplay) {
                if (cachedCalendarDate) {
                    guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                        Client.font,
                        Text.translate("tfc.tooltip.calendar_date", cachedCalendarDate).getString(),
                        0, 12,
                        getColorWithRGBA(55, 255, 155, 100),
                        false
                    )
                }
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("ui.kubejs.current_dimension", Client.player.level.dimension.location().getPath()).getString(),
                    0, 24,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.climate_koppen_climate_classification", Text.translatable(cachedClimate.climateText)).getString(),
                    0, 36,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.climate_annual_rainfall", cachedClimate.rainFall.toFixed(1)).getString(),
                    4, 48,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.climate_average_temperature", cachedClimate.avgTemp.toFixed(1)).getString(),
                    4, 60,
                    getColorWithRGBA(55, 255, 155, 100),
                    false
                )
                guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    Text.translate("tfc.tooltip.climate_current_temp", cachedClimate.currentTemp.toFixed(1)).getString(),
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