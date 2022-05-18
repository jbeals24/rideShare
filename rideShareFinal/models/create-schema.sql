/*
drop table if exists account;

create table account
(
    id        serial  not null
        constraint account_pk
            primary key,
    first_name varchar not null,
    last_name  varchar not null,
    email     varchar not null,
    password  varchar not null
);

comment on table account is 'User Account';
*/

create table if not exists "user"
(
    id          serial
        constraint user_pk
            primary key,
    "firstName" varchar(40),
    "lastName"  varchar(40),
    email       varchar(40),
    password    varchar(80),
    phone       varchar(40),
    "isAdmin"   boolean
);

create table if not exists "vehicleType"
(
    id   integer     not null
        constraint vehicletype_pk
            primary key,
    type varchar(40) not null
);

create unique index if not exists vehicletype_id_uindex
    on "vehicleType" (id);

create table if not exists state
(
    abbreviation varchar(40) not null
        constraint state_pk
            primary key,
    name         varchar(40) not null
);

create table if not exists driver
(
    id              serial
        constraint driver_pk
            primary key,
    "userId"        integer     not null
        constraint driver_user_id_fk
            references "user",
    "licenseState"  varchar(40)
        constraint driver_state_abbreviation_fk
            references state,
    "licenseNumber" varchar(40) not null
);

create table if not exists vehicle
(
    id              integer          not null
        constraint vehicle_pk
            primary key,
    make            varchar(40)      not null,
    model           varchar(40)      not null,
    color           varchar(40)      not null,
    "vehicleTypeId" integer          not null
        constraint vehicle_vehicletype_id_fk
            references "vehicleType",
    capacity        integer          not null,
    mpg             double precision not null,
    "licenseState"  varchar(40)      not null
        constraint vehicle_state_abbreviation_fk
            references state,
    "licensePlate"  varchar(40)      not null
);

create table if not exists "authorization"
(
    "driverId"  integer not null
        constraint authorization_driver_id_fk
            references driver,
    "vehicleId" integer not null
        constraint authorization_vehicle_id_fk
            references vehicle,
    constraint authorization_pk
        primary key ("driverId", "vehicleId")
);

create unique index if not exists authorization_driverid_uindex
    on "authorization" ("driverId");

create unique index if not exists authorization_vehicleid_uindex
    on "authorization" ("vehicleId");

create unique index if not exists vehicle_id_uindex
    on vehicle (id);

create unique index if not exists vehicle_licenseplate_uindex
    on vehicle ("licensePlate");

create table if not exists location
(
    id      serial
        constraint location_pk
            primary key,
    name    varchar(40) not null,
    address varchar(40) not null,
    city    varchar(40) not null,
    state   varchar(40) not null
        constraint location_state_abbreviation_fk
            references state,
    zipcode varchar(40) not null
);

create table if not exists ride
(
    id               integer          not null
        constraint ride_pk
            primary key,
    date             date             not null,
    time             time             not null,
    distance         double precision not null,
    "fuelPrice"      double precision not null,
    fee              double precision not null,
    "vehicleId"      integer          not null
        constraint ride_vehicle_id_fk
            references vehicle,
    "fromLocationId" integer          not null
        constraint ride_location_id_fk
            references location,
    "toLocationId"   integer          not null
        constraint ride_location_id_fk_2
            references location
);

create table if not exists passenger
(
    "userId" integer not null
        constraint passenger_user_id_fk
            references "user",
    "rideId" integer not null
        constraint passenger_ride_id_fk
            references ride,
    constraint passenger_pk
        primary key ("userId", "rideId")
);
create table if not exists drivers
(
    "driverId" integer not null
        constraint drivers_driver_id_fk
            references driver,
    "rideId"   integer not null
        constraint drivers_ride_id_fk
            references ride,
    constraint drivers_pk
        primary key ("driverId", "rideId")
);

create unique index if not exists drivers_driverid_uindex
    on drivers ("driverId");

create unique index if not exists drivers_rideid_uindex
    on drivers ("rideId");

create unique index if not exists ride_id_uindex
    on ride (id);

create unique index if not exists ride_vehicleid_uindex
    on ride ("vehicleId");

create unique index if not exists location_id_uindex
    on location (id);

