<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'rhdesign2co_rhdesig1_wp691' );

/** MySQL database username */
define( 'DB_USER', 'rhdesign2co_project7' );

/** MySQL database password */
define( 'DB_PASSWORD', '#WhenInPheli1' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '6w4-J/S7pa3V2+9*Xi6a8&91R071|oo+06A8Ka;d)S38nqDh|UL~RvY-!q&hM!dG');
define('SECURE_AUTH_KEY', 'lAt730%j/FmA@-UU!NqrG%VWQaWM25!b950LvtaVjX4CcUQ99@T#1:imR579OOp5');
define('LOGGED_IN_KEY', '0wsL3C~xaI[@98D;0P3|tY%7[DXWx79uz~I#u%0(RXng0g!Q52):VA&[2(YslE5~');
define('NONCE_KEY', '35)54BZ6&&w#n/2wb0I7gT0MYYl+3Fp8lq@73ZKF[9bG97s173&GTPnsOLx301!B');
define('AUTH_SALT', 'NfO3&vl5z~&-3a16bkUKC*[c:5KaSd-!;6316yf22T!u_Dc~3*-OVB30;8%Z#/Y5');
define('SECURE_AUTH_SALT', '!5z)2]9[&MGhP0K()~+f]0Sy6&g(b~OS0/-:L]6n+Xh)Ply;d5&;8q5*54Dl9JF:');
define('LOGGED_IN_SALT', '/8pZ2XV1N03Qz))ul4Mm!1SMbUF~99p!#lB9)%@T67J&@S2O40(T7Co[ngo0i53R');
define('NONCE_SALT', '-b1%];K7vJ:m/N9_F32BvXtAmHhe94N[2#w_ukpVI)gtf7[*;Xv69Wj!9B3|132d');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpq2_';


define('WP_ALLOW_MULTISITE', true);
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
