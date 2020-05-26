import { DataTypes } from 'sequelize';

import { sequelize } from '../config';

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    firstName: { type: DataTypes.STRING, field: 'first_name' },
    lastName: { type: DataTypes.STRING, field: 'last_name' },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    emailVerified: {
      type: DataTypes.INTEGER,
      field: 'email_verified',
      defaultValue: 0
    },
    password: { type: DataTypes.STRING, unique: true },
    phone: DataTypes.STRING,
    phoneVerified: {
      type: DataTypes.INTEGER,
      field: 'phone_verified',
      defaultValue: 0
    },
    photo: DataTypes.STRING,
    ageGroup: { type: DataTypes.STRING, field: 'age_group' },
    dateOfBirth: { type: DataTypes.DATEONLY, field: 'date_of_birth' },
    sex: DataTypes.STRING,
    educationLevel: { type: DataTypes.STRING, field: 'education_level' },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    enabled: { type: DataTypes.INTEGER, defaultValue: 0 },
    hash: DataTypes.STRING
  },
  { paranoid: true, tableName: 'users' }
);
