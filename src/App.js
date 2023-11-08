import CalendarService from "jaroslawik-datepicker2";

const MyCalendar = CalendarService.getCustomizeCalendar();
const MyCalendarWithDatePicker = CalendarService.getCalendarWithDatePicker();
const MyCalendarWithRangePicker = CalendarService.getCalendarWithRangePicker();

function App() {
  return (
    <div className="App">
      <MyCalendar startOnMonday={false} />
      <MyCalendarWithDatePicker withTodos={true} />
      <MyCalendarWithRangePicker
        maxCalendarYear={2033}
        minCalendarYear={2000}
      />
    </div>
  );
}

export default App;
