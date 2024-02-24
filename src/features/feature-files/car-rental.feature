@traveloka-web-test @car-rental-features
Feature: Car Rental Booking

    @car-rental-booking @web
    Scenario: User books a car rental without driver
        Given user visit URL "https://www.traveloka.com/"
        And user select "Car Rental" product on Homepage
        When user is on the Car Rental tab
        And user select "Without Driver" button on Car Rental search form
        And user select "Jakarta" as the Rental Location
        And user select the Rental Start Date as "2" days from today at "09:00"
        And user select the Rental End Date as "5" days from today at "11:00"
        And user click Search Car Rental button
        And user select car with name contains "Avanza"
        And user select car rental provider with name contains "TRAC"
        And user select "Rental Office" at "Jakarta" as the Pick-up Location
        And user select "Other Locations" at "Slipi" as the Drop-off Location
        And user fill notes "Pelan pelan pak supir"
        And user click Continue button on rental detail page
