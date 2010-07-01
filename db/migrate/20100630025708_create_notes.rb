class CreateNotes < ActiveRecord::Migration
  def self.up
    create_table :notes do |t|
      t.string    :content
      t.string    :background
      t.integer    :x_pos
      t.integer    :y_pos
      t.integer    :z_pos
    end
  end

  def self.down
    drop_table :notes
  end
end
